import withSplitting from '../withSplitting';
import loadable from '@loadable/component'

export const Home = withSplitting(() => import('./Home'));
export const About = withSplitting(() => import('./About'));
export const Posts = loadable(() => import('./Posts'));