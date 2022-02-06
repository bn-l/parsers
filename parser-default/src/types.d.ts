export type ModifierKey = 'lt' | 'lte' | 'eq' | 'gte' | 'gt';

export type ModifierOption =  Record<'key' | 'value', string>;

export type Modifier = (value: any, options:ModifierOption[], defaultValue?: string, locale?: string) => string;

export type DefaultModifiers = Record<ModifierKey, Modifier>;

export type CustomModifiers = Record<string, Modifier>;

export type ParserOptions = {
  customModifiers?: CustomModifiers;
};

export type Parser = (options: ParserOptions) => {
  parse: (props: {
    translations: Record<string, Record<string, any>>;
    key: string;
    payload?: Record<any, any>;
    locale?: string;
    fallbackLocale?: string;
  }) => string
};