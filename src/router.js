import Calendar from "./pages/Calendar.vue";
import NameList from "./pages/NameList.vue";
import Home from "./pages/Home.vue";
import Markdown from "./pages/Markdown.vue";

export const routes = [
     { path: '/', component: Home },
     { path: '/name-list', component: NameList },
     { path: '/calendar', component: Calendar },
     { path: '/markdown', component: Markdown },
]