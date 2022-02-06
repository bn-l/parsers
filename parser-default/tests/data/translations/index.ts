import * as common from './en/common.json';
import * as route from './en/route.json';
import * as common_cs from './cs/common.json';

export default ({
  en: {
    common,
    route1: route,
    route2: route,
  },
  cs: {
    common: common_cs,
  },
}) as Record<string, any>;