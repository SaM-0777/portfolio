import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-oxblood tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-oxblood font-eb-garamond">
      {children}
    </h2>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold text-oxblood font-eb-garamond">
      {children}
    </h4>
  ),
  img: (props) => (
    <figure>
      <Image
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
      {props.alt && (
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  a: ({ children, ...props }) => (
    <a
      {...props}
      className="text-oxblood underline decoration-1"
    >
      {children}
    </a>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
