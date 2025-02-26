export type Priority = 'low' | 'medium' | 'high';

export interface ITask {
  id: string | number;
  title: string;
  description: string;
  priority: Priority;
  creationDate: Date;
}

export type BuildMode = 'production' | 'development';

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
