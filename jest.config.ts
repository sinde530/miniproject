import type { Config } from "@jest/types";

// 동기화 개체
// const config: Config.InitialOptions = {
//   verbose: true,
// };
// export default config;

// 또는 비동기 함수
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
  };
};
