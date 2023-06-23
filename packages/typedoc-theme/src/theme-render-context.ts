import {
  Comment,
  CommentDisplayPart,
  DeclarationReflection,
  ReferenceType,
  Reflection,
} from "typedoc";
import { VERSION } from "./constants";
import { defaultLayout } from "./layouts/default";
import { index } from "./partials";
import { analytics } from "./partials/analytics";
import { breadcrumb } from "./partials/breadcrumb";
import { comment, commentSummary, commentTags } from "./partials/comment";
import { footer } from "./partials/footer";
import { header } from "./partials/header";
import { hierarchy } from "./partials/hierarchy";
import { icons, iconSet } from "./partials/icon";
import { member } from "./partials/member";
import { memberDeclaration } from "./partials/member.declaration";
import { memberGetterSetter } from "./partials/member.getterSetter";
import { memberReference } from "./partials/member.reference";
import { memberSignatureBody } from "./partials/member.signature.body";
import { memberSignatureTitle } from "./partials/member.signature.title";
import { memberSignatures } from "./partials/member.signatures";
import { memberSources } from "./partials/member.sources";
import { members } from "./partials/members";
import { membersGroup } from "./partials/members.group";
import {
  navigation,
  pageNavigation,
  sidebarLinks,
  getModules,
  getCurrentModule,
} from "./partials/navigation";
import { gjsifySidebar, gjsifySidebarContent } from "./partials/gjsify-sidebar";
import { parameter } from "./partials/parameter";
import { toolbar } from "./partials/toolbar";
import { type } from "./partials/type";
import { typeAndParent } from "./partials/typeAndParent";
import { typeParameters } from "./partials/typeParameters";
import { indexTemplate } from "./templates";
import { reflectionTemplate } from "./templates/reflection";

import type { PageEvent, RendererHooks, Options } from "typedoc";
import type { NeverIfInternal } from "./types";
import type { GjsifyTheme } from "./theme";

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r);
}

export class GjsifyThemeRenderContext {
  options: Options;

  VERSION = VERSION;

  /**
   * Regular expression to test if a string looks like an external / absolute url.
   */
  protected urlPrefix = /^(http|ftp)s?:\/\//;

  constructor(
    private theme: GjsifyTheme,
    public page: PageEvent<Reflection>,
    options: Options
  ) {
    this.options = options;
  }

  icons = icons;

  iconSet = iconSet;

  hook = (name: keyof RendererHooks) =>
    this.theme.owner.hooks.emit(name, this as any);

  /** Avoid this in favor of urlTo if possible */
  relativeURL = (url: string, cacheBust = false) => {
    const result = this.theme.markedPlugin.getRelativeUrl(url);
    if (cacheBust && this.theme.owner.cacheBust) {
      return result + `?cache=${this.theme.owner.renderStartTime}`;
    }
    return result;
  };

  urlTo = (reflection: Reflection) => {
    return reflection.url ? this.relativeURL(reflection.url) : "";
  };

  public absoluteUrl = (url: string | undefined): string => {
    if (!url) return "";
    const isAbsolute = this.urlPrefix.test(url);
    if (isAbsolute) {
      return url;
    }
    const relativeUrl = this.relativeURL(url) || "";

    url = relativeUrl.replaceAll("../", "");

    if (!url.startsWith("/")) {
      url = "/" + url;
    }

    // Option from typedoc-plugin-remote-search
    // let serverBaseUrl = (this.options.getValue("serverBaseUrl") || "/") as string;
    // if (serverBaseUrl.endsWith("/")) {
    //   serverBaseUrl = serverBaseUrl.substring(1);
    // }

    return url;
  };

  markdown = (
    md: readonly CommentDisplayPart[] | NeverIfInternal<string | undefined>
  ) => {
    if (md instanceof Array) {
      return this.theme.markedPlugin.parseMarkdown(
        Comment.displayPartsToMarkdown(md, this.urlTo),
        this.page
      );
    }
    return md ? this.theme.markedPlugin.parseMarkdown(md, this.page) : "";
  };

  /**
   * Using this method will repeat work already done, instead of calling it, use `type.externalUrl`.
   * @deprecated
   * Will be removed in 0.24.
   */
  attemptExternalResolution = (type: NeverIfInternal<ReferenceType>) => {
    return (type as ReferenceType).externalUrl;
  };

  getReflectionClasses = (refl: DeclarationReflection | Reflection) =>
    this.theme.getReflectionClasses(refl);

  reflectionTemplate = bind(reflectionTemplate, this);
  indexTemplate = bind(indexTemplate, this);
  defaultLayout = bind(defaultLayout, this);

  analytics = bind(analytics, this);
  breadcrumb = bind(breadcrumb, this);
  /** @deprecated will be removed in 0.25 */
  comment = bind(comment, this);
  commentSummary = bind(commentSummary, this);
  commentTags = bind(commentTags, this);
  footer = bind(footer, this);
  header = bind(header, this);
  hierarchy = bind(hierarchy, this);
  index = bind(index, this);
  member = bind(member, this);
  memberDeclaration = bind(memberDeclaration, this);
  memberGetterSetter = bind(memberGetterSetter, this);
  memberReference = bind(memberReference, this);
  memberSignatureBody = bind(memberSignatureBody, this);
  memberSignatureTitle = bind(memberSignatureTitle, this);
  memberSignatures = bind(memberSignatures, this);
  memberSources = bind(memberSources, this);
  members = bind(members, this);
  membersGroup = bind(membersGroup, this);
  sidebarLinks = bind(sidebarLinks, this);
  navigation = bind(navigation, this);
  gjsifySidebar = bind(gjsifySidebar, this);
  gjsifySidebarContent = bind(gjsifySidebarContent, this);
  getModules = bind(getModules, this);
  getCurrentModule = bind(getCurrentModule, this);
  pageNavigation = bind(pageNavigation, this);
  parameter = bind(parameter, this);
  toolbar = bind(toolbar, this);
  type = bind(type, this);
  typeAndParent = bind(typeAndParent, this);
  typeParameters = bind(typeParameters, this);
}
