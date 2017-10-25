import brewAction from '@/brew/action';
import { pagination } from '../common/actions';

const state = {
  appList: [],
};

const mutations = {
  DECREMENT_MAIN_COUNTER(state) {
    state.main -= 1;
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.main += 1;
  },
  GETMENT_LOCAL_PAGE(state, { list, pageNo, pageSize }) {
    console.log(pageNo, pageSize);
    state.appList = pagination(list.split('\n'), pageNo, pageSize);
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
};

export default {
  state,
  mutations,
  actions,
};
