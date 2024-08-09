import webpack from 'webpack';
import path from 'path';
import { buildWebpack, BuildMode, BuildPaths, BuildPlatform } from "@packages/build-config";

interface EnvVariables {
  mode?: BuildMode;
  port: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    // для favicon, json файлов напр-р для перевода
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
  });
  return config;
};
