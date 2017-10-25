import brewAction from '@/brew/action';
import { pagination } from '../common/actions';

const state = {
  appList: [],
  uninstallList: [],
};

const mutations = {
  GETMENT_LOCAL_PAGE(state, { list, pageNo, pageSize }) {
    console.log(pageNo, pageSize);
    state.appList = pagination(list.split('\n'), pageNo, pageSize);
  },
  DELMENT_LOCAL_SW(state, { name }) {
    console.log(name);
    state.uninstallList.push(name);
  },
};

const actions = {
  getAppListPage() {
    // do something async
    // commit('INCREMENT_MAIN_COUNTER');
  },
  getLocalAppListPage({ commit }, { pageNo, pageSize }) {
    brewAction.getLocalList('').then((list) => {
      commit('GETMENT_LOCAL_PAGE', { list, pageNo, pageSize });
    });
  },
  uninstall({ commit }, { name }) {
    brewAction.uninstall(name).then(() => {
      commit('DELMENT_LOCAL_SW', { name });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
