import * as handlebars from "handlebars";
import { EmailTemplate } from "./contact";

export async function compileEmailTemplate(name: string) {
  const template = handlebars.compile(EmailTemplate);
  const html = template({ name });

  return html;
}
