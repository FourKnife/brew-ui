import _ from 'lodash';

export const pagination = (list, pageNo, pageSize) =>
  _.slice(list, (pageNo - 1) * pageSize, ((pageNo - 1) * pageSize) + pageSize);

export const test = () => '1';
