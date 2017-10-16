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
  GETMENT_LOCAL_PAGE(state, { list }) {
    state.appList = pagination(list.split('\n'), 1, 10);
  },
};

const actions = {
  getAppListPage() {
    // do something async
    // commit('INCREMENT_MAIN_COUNTER');
  },
  getLocalAppListPage({ commit }) {
    brewAction.getLocalList('').then((list) => {
      commit('GETMENT_LOCAL_PAGE', { list });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
