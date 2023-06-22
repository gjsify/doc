import type { GjsifyThemeRenderContext } from "../theme-render-context";
import {
  DeclarationReflection,
  LiteralType,
  ProjectReflection,
  ReferenceType,
  Reflection,
  ReflectionKind,
  Type,
  TypeContext,
  TypeKindMap,
} from "typedoc";
import { JSX } from "../jsx/index.js";
import { getKindClass, join, stringify } from "../lib";
import { ok } from "assert";

const EXPORTABLE: ReflectionKind =
  ReflectionKind.Class |
  ReflectionKind.Interface |
  ReflectionKind.Enum |
  ReflectionKind.TypeAlias |
  ReflectionKind.Function |
  ReflectionKind.Variable;

const nameCollisionCache = new WeakMap<
  ProjectReflection,
  Record<string, number | undefined>
>();
function getNameCollisionCount(
  project: ProjectReflection,
  name: string
): number {
  let collisions = nameCollisionCache.get(project);
  if (collisions === undefined) {
    collisions = {};
    for (const reflection of project.getReflectionsByKind(EXPORTABLE)) {
      collisions[reflection.name] = (collisions[reflection.name] ?? 0) + 1;
    }
    nameCollisionCache.set(project, collisions);
  }
  return collisions[name] ?? 0;
}

/**
 * Returns a (hopefully) globally unique path for the given reflection.
 *
 * This only works for exportable symbols, so e.g. methods are not affected by this.
 *
 * If the given reflection has a globally unique name already, then it will be returned as is. If the name is
 * ambiguous (i.e. there are two classes with the same name in different namespaces), then the namespaces path of the
 * reflection will be returned.
 */
function getUniquePath(reflection: Reflection): Reflection[] {
  if (reflection.kindOf(EXPORTABLE)) {
    if (getNameCollisionCount(reflection.project, reflection.name) >= 2) {
      return getNamespacedPath(reflection);
    }
  }
  return [reflection];
}
function getNamespacedPath(reflection: Reflection): Reflection[] {
  const path = [reflection];
  let parent = reflection.parent;
  while (parent?.kindOf(ReflectionKind.Namespace)) {
    path.unshift(parent);
    parent = parent.parent;
  }
  return path;
}
function renderUniquePath(
  context: GjsifyThemeRenderContext,
  reflection: Reflection
): JSX.Element {
  return join(
    (<span class="tsd-signature-symbol">.</span>) as JSX.Children,
    getUniquePath(reflection),
    (item) =>
      (
        <a
          href={context.urlTo(item)}
          class={"tsd-signature-type " + getKindClass(item)}
        >
          {item.name}
        </a>
      ) as JSX.Element
  ) as JSX.Element;
}

let indentationDepth = 0;
function includeIndentation(): JSX.Element {
  return indentationDepth > 0
    ? ((<span>{"\u00A0".repeat(indentationDepth * 4)}</span>) as JSX.Element)
    : ((<></>) as JSX.Element);
}

export function validateStateIsClean(page: string) {
  ok(
    indentationDepth === 0,
    `Rendering ${page}: Indentation depth increment/decrement not matched: ${indentationDepth}`
  );
}

// The type helper accepts an optional needsParens parameter that is checked
// if an inner type may result in invalid output without them. For example:
// 1 | 2[] !== (1 | 2)[]
// () => 1 | 2 !== (() => 1) | 2
const typeRenderers: {
  [K in keyof TypeKindMap]: (
    context: GjsifyThemeRenderContext,
    type: TypeKindMap[K]
  ) => JSX.Element;
} = {
  array(context, type) {
    return (
      <>
        {renderType(context, type.elementType, TypeContext.arrayElement)}
        <span class="tsd-signature-symbol">[]</span>
      </>
    ) as JSX.Element;
  },
  conditional(context, type) {
    indentationDepth++;
    const parts = [
      renderType(context, type.checkType, TypeContext.conditionalCheck),
      <span class="tsd-signature-symbol"> extends </span>,
      renderType(context, type.extendsType, TypeContext.conditionalExtends),
      <br />,
      includeIndentation(),
      <span class="tsd-signature-symbol">? </span>,
      renderType(context, type.trueType, TypeContext.conditionalTrue),
      <br />,
      includeIndentation(),
      <span class="tsd-signature-symbol">: </span>,
      renderType(context, type.falseType, TypeContext.conditionalFalse),
    ];
    indentationDepth--;

    return (<>{parts}</>) as JSX.Element;
  },
  indexedAccess(context, type) {
    let indexType: JSX.Element = renderType(
      context,
      type.indexType,
      TypeContext.indexedIndex
    );

    if (
      type.objectType instanceof ReferenceType &&
      type.objectType.reflection &&
      type.indexType instanceof LiteralType &&
      typeof type.indexType.value === "string"
    ) {
      const childReflection = type.objectType.reflection.getChildByName([
        type.indexType.value,
      ]);
      if (childReflection) {
        indexType = (
          <a href={context.urlTo(childReflection)}>{indexType}</a>
        ) as JSX.Element;
      }
    }

    return (
      <>
        {renderType(context, type.objectType, TypeContext.indexedObject)}
        <span class="tsd-signature-symbol">[</span>
        {indexType}
        <span class="tsd-signature-symbol">]</span>
      </>
    ) as JSX.Element;
  },
  inferred(context, type) {
    return (
      <>
        <span class="tsd-signature-symbol">infer </span>{" "}
        <span class="tsd-kind-type-parameter">{type.name}</span>
        {type.constraint && (
          <>
            <span class="tsd-signature-symbol"> extends </span>
            {renderType(
              context,
              type.constraint,
              TypeContext.inferredConstraint
            )}
          </>
        )}
      </>
    ) as JSX.Element;
  },
  intersection(context, type) {
    return join(
      (<span class="tsd-signature-symbol"> &amp; </span>) as JSX.Children,
      type.types,
      (item) => renderType(context, item, TypeContext.intersectionElement)
    ) as JSX.Element;
  },
  intrinsic(_context, type) {
    return (<span class="tsd-signature-type">{type.name}</span>) as JSX.Element;
  },
  literal(_context, type) {
    return (
      <span class="tsd-signature-type">{stringify(type.value)}</span>
    ) as JSX.Element;
  },
  mapped(context, type) {
    indentationDepth++;
    const parts = [
      <span class="tsd-signature-symbol">{"{"}</span>,
      <br />,
      includeIndentation(),
    ];

    switch (type.readonlyModifier) {
      case "+":
        parts.push(<span class="tsd-signature-symbol">readonly </span>);
        break;
      case "-":
        parts.push(<span class="tsd-signature-symbol">-readonly </span>);
        break;
    }

    parts.push(
      <span class="tsd-signature-symbol">[</span>,
      <span class="tsd-kind-type-parameter">{type.parameter}</span>,
      <span class="tsd-signature-symbol"> in </span>,
      renderType(context, type.parameterType, TypeContext.mappedParameter)
    );

    if (type.nameType) {
      parts.push(
        <span class="tsd-signature-symbol"> as </span>,
        renderType(context, type.nameType, TypeContext.mappedName)
      );
    }

    parts.push(<span class="tsd-signature-symbol">]</span>);

    switch (type.optionalModifier) {
      case "+":
        parts.push(<span class="tsd-signature-symbol">?: </span>);
        break;
      case "-":
        parts.push(<span class="tsd-signature-symbol">-?: </span>);
        break;
      default:
        parts.push(<span class="tsd-signature-symbol">: </span>);
    }

    parts.push(
      renderType(context, type.templateType, TypeContext.mappedTemplate)
    );

    indentationDepth--;

    return (
      <>
        {parts}
        <br />
        {includeIndentation()}
        <span class="tsd-signature-symbol">{"}"}</span>
      </>
    ) as JSX.Element;
  },
  namedTupleMember(context, type) {
    return (
      <>
        {type.name}
        {type.isOptional ? (
          <span class="tsd-signature-symbol">?: </span>
        ) : (
          <span class="tsd-signature-symbol">: </span>
        )}
        {renderType(context, type.element, TypeContext.tupleElement)}
      </>
    ) as JSX.Element;
  },
  optional(context, type) {
    return (
      <>
        {renderType(context, type.elementType, TypeContext.optionalElement)}
        <span class="tsd-signature-symbol">?</span>
      </>
    ) as JSX.Element;
  },
  predicate(context, type) {
    return (
      <>
        {!!type.asserts && <span class="tsd-signature-symbol">asserts </span>}
        <span class="tsd-kind-parameter">{type.name}</span>
        {!!type.targetType && (
          <>
            <span class="tsd-signature-symbol"> is </span>
            {renderType(context, type.targetType, TypeContext.predicateTarget)}
          </>
        )}
      </>
    ) as JSX.Element;
  },
  query(context, type) {
    return (
      <>
        <span class="tsd-signature-symbol">typeof </span>
        {renderType(context, type.queryType, TypeContext.queryTypeTarget)}
      </>
    ) as JSX.Element;
  },
  reference(context, type) {
    const reflection = type.reflection;

    let name: JSX.Element;

    if (reflection) {
      if (reflection.kindOf(ReflectionKind.TypeParameter)) {
        // Don't generate a link as it will always point to this page.
        name = (
          <span class="tsd-signature-type tsd-kind-type-parameter">
            {reflection.name}
          </span>
        ) as JSX.Element;
      } else {
        name = renderUniquePath(context, reflection);
      }
    } else if (type.externalUrl) {
      name = (
        <a
          href={type.externalUrl}
          class="tsd-signature-type external"
          target="_blank"
        >
          {type.name}
        </a>
      ) as JSX.Element;
    } else if (type.refersToTypeParameter) {
      name = (
        <span class="tsd-signature-type tsd-kind-type-parameter">
          {type.name}
        </span>
      ) as JSX.Element;
    } else {
      name = (
        <span class="tsd-signature-type ">{type.name}</span>
      ) as JSX.Element;
    }

    if (type.typeArguments?.length) {
      return (
        <>
          {name}
          <span class="tsd-signature-symbol">{"<"}</span>
          {join(
            (<span class="tsd-signature-symbol">, </span>) as JSX.Element,
            type.typeArguments,
            (item) =>
              renderType(context, item, TypeContext.referenceTypeArgument)
          )}
          <span class="tsd-signature-symbol">{">"}</span>
        </>
      ) as JSX.Element;
    }

    return name;
  },
  reflection(context, type) {
    const members: JSX.Element[] = [];
    const children: DeclarationReflection[] = type.declaration.children || [];

    indentationDepth++;

    for (const item of children) {
      if (item.getSignature && item.setSignature) {
        members.push(
          (
            <>
              <span class={getKindClass(item)}>{item.name}</span>
              <span class="tsd-signature-symbol">: </span>
              {renderType(context, item.getSignature.type, TypeContext.none)}
            </>
          ) as JSX.Element
        );
        continue;
      }

      if (item.getSignature) {
        members.push(
          (
            <>
              <span class="tsd-signature-symbol">get </span>
              <span class={getKindClass(item.getSignature)}>{item.name}</span>
              <span class="tsd-signature-symbol">(): </span>
              {renderType(context, item.getSignature.type, TypeContext.none)}
            </>
          ) as JSX.Element
        );
        continue;
      }

      if (item.setSignature) {
        members.push(
          (
            <>
              <span class="tsd-signature-symbol">set </span>
              <span class={getKindClass(item.setSignature)}>{item.name}</span>
              <span class="tsd-signature-symbol">(</span>
              {item.setSignature.parameters?.map((item) => (
                <>
                  {item.name}
                  <span class="tsd-signature-symbol">: </span>
                  {renderType(context, item.type, TypeContext.none)}
                </>
              ))}
              <span class="tsd-signature-symbol">)</span>
            </>
          ) as JSX.Element
        );
        continue;
      }

      if (item.signatures) {
        for (const sig of item.signatures) {
          members.push(
            (
              <>
                <span class={getKindClass(sig)}>{item.name}</span>
                {item.flags.isOptional && (
                  <span class="tsd-signature-symbol">?</span>
                )}
                {context.memberSignatureTitle(sig, {
                  hideName: true,
                  arrowStyle: true,
                })}
              </>
            ) as JSX.Element
          );
        }
        continue;
      }

      members.push(
        (
          <>
            <span class={getKindClass(item)}>{item.name}</span>
            <span class="tsd-signature-symbol">
              {item.flags.isOptional ? "?: " : ": "}
            </span>
            {renderType(context, item.type, TypeContext.none)}
          </>
        ) as JSX.Element
      );
    }

    if (type.declaration.indexSignature) {
      const index = type.declaration.indexSignature;
      members.push(
        (
          <>
            [
            <span class={getKindClass(type.declaration.indexSignature)}>
              {index.parameters![0].name}
            </span>
            : {renderType(context, index.parameters![0].type, TypeContext.none)}
            ]<span class="tsd-signature-symbol">: </span>
            {renderType(context, index.type, TypeContext.none)}
          </>
        ) as JSX.Element
      );
    }

    if (!members.length && type.declaration.signatures?.length === 1) {
      indentationDepth--;

      return (
        <>
          <span class="tsd-signature-symbol">(</span>
          {context.memberSignatureTitle(type.declaration.signatures[0], {
            hideName: true,
            arrowStyle: true,
          })}
          <span class="tsd-signature-symbol">)</span>
        </>
      ) as JSX.Element;
    }

    for (const item of type.declaration.signatures || []) {
      members.push(
        context.memberSignatureTitle(item, { hideName: true }) as JSX.Element
      );
    }

    if (members.length) {
      const membersWithSeparators = members.flatMap((m) => [
        includeIndentation(),
        m,
        <span class="tsd-signature-symbol">; </span>,
        <br></br>,
      ]);
      membersWithSeparators.pop();

      indentationDepth--;
      return (
        <>
          <span class="tsd-signature-symbol">{"{"} </span>
          <br></br>
          {membersWithSeparators}
          <br></br>
          {includeIndentation()}
          <span class="tsd-signature-symbol">{"}"}</span>
        </>
      ) as JSX.Element;
    }

    indentationDepth--;
    return (<span class="tsd-signature-symbol">{"{}"}</span>) as JSX.Element;
  },
  rest(context, type) {
    return (
      <>
        <span class="tsd-signature-symbol">...</span>
        {renderType(context, type.elementType, TypeContext.restElement)}
      </>
    ) as JSX.Element;
  },
  templateLiteral(context, type) {
    return (
      <>
        <span class="tsd-signature-symbol">`</span>
        {type.head && <span class="tsd-signature-type">{type.head}</span>}
        {type.tail.map((item) => (
          <>
            <span class="tsd-signature-symbol">{"${"}</span>
            {renderType(context, item[0], TypeContext.templateLiteralElement)}
            <span class="tsd-signature-symbol">{"}"}</span>
            {item[1] && <span class="tsd-signature-type">{item[1]}</span>}
          </>
        ))}
        <span class="tsd-signature-symbol">`</span>
      </>
    ) as JSX.Element;
  },
  tuple(context, type) {
    return (
      <>
        <span class="tsd-signature-symbol">[</span>
        {join(
          (<span class="tsd-signature-symbol">, </span>) as JSX.Element,
          type.elements,
          (item) => renderType(context, item, TypeContext.tupleElement)
        )}
        <span class="tsd-signature-symbol">]</span>
      </>
    ) as JSX.Element;
  },
  typeOperator(context, type) {
    return (
      <>
        <span class="tsd-signature-symbol">{type.operator} </span>
        {renderType(context, type.target, TypeContext.typeOperatorTarget)}
      </>
    ) as JSX.Element;
  },
  union(context, type) {
    return join(
      (<span class="tsd-signature-symbol"> | </span>) as JSX.Element,
      type.types,
      (item) => renderType(context, item, TypeContext.unionElement)
    ) as JSX.Element;
  },
  unknown(_context, type) {
    return (<>{type.name}</>) as JSX.Element;
  },
};

function renderType(
  context: GjsifyThemeRenderContext,
  type: Type | undefined,
  where: TypeContext
): JSX.Element {
  if (!type) {
    return (<span class="tsd-signature-type">any</span>) as JSX.Element;
  }

  const renderFn = typeRenderers[type.type];
  const rendered = renderFn(context, type as never);

  if (type.needsParenthesis(where)) {
    return (
      <>
        <span class="tsd-signature-symbol">(</span>
        {rendered}
        <span class="tsd-signature-symbol">)</span>
      </>
    ) as JSX.Element;
  }

  return rendered as JSX.Element;
}

export function type(
  context: GjsifyThemeRenderContext,
  type: Type | undefined
) {
  return renderType(context, type, TypeContext.none);
}
