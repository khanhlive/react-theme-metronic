import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Gallery = Loadable({
  loader: () => import("./components/Gallery"),
  loading: Loading
});

const Blog = Loadable({
  loader: () => import("./components/Blog"),
  loading: Loading
});

const Projects = Loadable({
  loader: () => import("./components/Projects"),
  loading: Loading
});

const Profile = Loadable({
  loader: () => import("./components/Profile"),
  loading: Loading
});

const Timeline = Loadable({
  loader: () => import("./components/Timeline"),
  loading: Loading
});

const Forum = Loadable({
  loader: () => import("./components/Forum"),
  loading: Loading
});

const ForumTopic = Loadable({
  loader: () => import("./components/ForumTopic"),
  loading: Loading
});

const ForumPost = Loadable({
  loader: () => import("./components/ForumPost"),
  loading: Loading
});

export const routes = [
  {
    path: "/views/gallery",
    exact: true,
    component: Gallery,
    name: "Gallery"
  },
  {
    path: "/views/projects",
    exact: true,
    component: Projects,
    name: "Projects"
  },
  {
    path: "/views/blog",
    exact: true,
    component: Blog,
    name: "Blog"
  },
  {
    path: "/views/profile",
    exact: true,
    component: Profile,
    name: "Profile"
  },
  {
    path: "/views/timeline",
    exact: true,
    component: Timeline,
    name: "Timeline"
  },

  {
    path: "/views/forum-general",
    exact: true,
    component: Forum,
    name: "Forum"
  },
  {
    path: "/views/forum-topic",
    exact: true,
    component: ForumTopic,
    name: "Forum Topic"
  },
  {
    path: "/views/forum-post",
    exact: true,
    component: ForumPost,
    name: "Forum Post"
  }
];
