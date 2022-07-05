// @flow
export type UrlQueryParamProps = {|
  onChange: (?(string | number)) => void,
  value: ?string,
|}

/*
name: name of the query string parameter
defaultValue: value to pass into props if no query string parameter was specified
props: converts props to something useful for your component
*/
export type UrlQueryParamOptions<TChildProps> = {|
  name: string,
  props: (UrlQueryParamProps) => TChildProps,
|}
