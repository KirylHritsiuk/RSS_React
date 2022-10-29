import { getPage } from 'components/UI/Pagination/helpers/getPage';
import { Categories } from 'context/home/HomeContext';
import { APIResponse } from 'interfaces/API';

export const getResponseData = <T>(responseData: APIResponse<T>): Categories<T> => {
  if (responseData instanceof Array) {
    return {
      cards: responseData,
      pages: 0,
      page: 0,
      count: responseData.length,
      prev: null,
      next: null,
      error: null,
    };
  } else if ('info' in responseData) {
    return {
      cards: responseData.results,
      pages: responseData.info.pages,
      page: getPage(responseData.info.prev),
      count: responseData.info.count,
      prev: responseData.info.prev,
      next: responseData.info.next,
      error: null,
    };
  } else if ('error' in responseData) {
    console.log('error', responseData.error);
    return {
      cards: null,
      pages: 0,
      page: 0,
      count: 0,
      prev: null,
      next: null,
      error: responseData.error,
    };
  } else {
    return {
      cards: [responseData],
      pages: 0,
      page: 0,
      count: 1,
      prev: null,
      next: null,
      error: null,
    };
  }
};
