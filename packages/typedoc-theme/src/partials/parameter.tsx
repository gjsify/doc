import { classNames, getKindClass, renderFlags, wbr } from "../lib";
import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "typedoc";
import { DeclarationReflection, ReflectionType } from "typedoc";

export const parameter = (
  context: GjsifyThemeRenderContext,
  props: DeclarationReflection
) => (
  <>
    <ul class="tsd-parameters">
      {!!props.signatures && (
        <li class="tsd-parameter-signature">
          <ul
            class={classNames(
              { "tsd-signatures": true },
              context.getReflectionClasses(props)
            )}
          >
            {props.signatures.map((item) => (
              <>
                <li class="tsd-signature" id={item.anchor}>
                  {context.memberSignatureTitle(item, {
                    hideName: true,
                  })}
                </li>
                <li class="tsd-description">
                  {context.memberSignatureBody(item, {
                    hideSources: true,
                  })}
                </li>
              </>
            ))}
          </ul>
        </li>
      )}
      {!!props.indexSignature && (
        <>
          <li class="tsd-parameter-index-signature">
            <h5>
              <span class="tsd-signature-symbol">[</span>
              {props.indexSignature?.parameters?.map((item) => (
                <>
                  {!!item.flags.isRest && (
                    <span class="tsd-signature-symbol">...</span>
                  )}
                  <span class={getKindClass(item)}>{item.name}</span>
                  {": "}
                  {context.type(item.type)}
                </>
              ))}
              <span class="tsd-signature-symbol">{"]: "}</span>
              {context.type(props.indexSignature.type)}
            </h5>
            {context.commentSummary(props.indexSignature)}
            {context.commentTags(props.indexSignature)}
            {props.indexSignature.type instanceof ReflectionType &&
              context.parameter(props.indexSignature.type.declaration)}
          </li>
        </>
      )}
      {props.children?.map((item) => (
        <>
          {item.signatures ? (
            <li class="tsd-parameter">
              <h5>
                {!!item.flags.isRest && (
                  <span class="tsd-signature-symbol">...</span>
                )}
                <span class={getKindClass(item)}>{wbr(item.name)}</span>
                <span class="tsd-signature-symbol">
                  {!!item.flags.isOptional && "?"}:
                </span>
                function
              </h5>

              {context.memberSignatures(item)}
            </li>
          ) : item.type ? (
            <>
              {/* standard type */}
              <li class="tsd-parameter">
                <h5>
                  {renderFlags(item.flags, item.comment)}
                  {!!item.flags.isRest && (
                    <span class="tsd-signature-symbol">...</span>
                  )}
                  <span class={getKindClass(item)}>{wbr(item.name)}</span>
                  <span class="tsd-signature-symbol">
                    {!!item.flags.isOptional && "?"}
                    {": "}
                  </span>
                  {context.type(item.type)}
                </h5>
                {context.commentSummary(item)}
                {context.commentTags(item)}
                {!!item.children && context.parameter(item)}
                {item.type instanceof ReflectionType &&
                  context.parameter(item.type.declaration)}
              </li>
            </>
          ) : (
            <>
              {/* getter/setter */}
              {item.getSignature && (
                <>
                  {/* getter */}
                  <li class="tsd-parameter">
                    <h5>
                      {renderFlags(
                        item.getSignature.flags,
                        item.getSignature.comment
                      )}
                      <span class="tsd-signature-symbol">get </span>
                      <span class={getKindClass(item)}>{wbr(item.name)}</span>
                      <span class="tsd-signature-symbol">(): </span>
                      {context.type(item.getSignature.type)}
                    </h5>

                    {context.commentSummary(item.getSignature)}
                    {context.commentTags(item.getSignature)}
                  </li>
                </>
              )}
              {item.setSignature && (
                <>
                  {/* setter */}
                  <li class="tsd-parameter">
                    <h5>
                      {renderFlags(
                        item.setSignature.flags,
                        item.setSignature.comment
                      )}
                      <span class="tsd-signature-symbol">set </span>
                      <span class={getKindClass(item)}>{wbr(item.name)}</span>
                      <span class="tsd-signature-symbol">(</span>
                      {item.setSignature.parameters?.map((item) => (
                        <>
                          {item.name}
                          <span class="tsd-signature-symbol">: </span>
                          {context.type(item.type)}
                        </>
                      ))}
                      <span class="tsd-signature-symbol">): </span>
                      {context.type(item.setSignature.type)}
                    </h5>

                    {context.commentSummary(item.setSignature)}
                    {context.commentTags(item.setSignature)}
                  </li>
                </>
              )}
            </>
          )}
        </>
      ))}
    </ul>
  </>
);