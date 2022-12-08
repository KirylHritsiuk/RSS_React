import { Categories } from 'context/home/HomeContext';
import { APIResponse } from 'interfaces/API';

export const getResponseData = <T>(responseData: APIResponse<T>): Categories<T> => {
  if (responseData instanceof Array) {
    return {
      cards: responseData,
      pages: null,
      count: responseData.length,
      prev: null,
      next: null,
      error: null,
    };
  } else if ('info' in responseData) {
    return {
      cards: responseData.results,
      pages: responseData.info.pages,
      count: responseData.info.count,
      prev: responseData.info.prev,
      next: responseData.info.next,
      error: null,
    };
  } else if ('error' in responseData) {
    return {
      cards: null,
      pages: null,
      count: 0,
      prev: null,
      next: null,
      error: responseData.error,
    };
  } else {
    return {
      cards: [responseData],
      pages: null,
      count: 1,
      prev: null,
      next: null,
      error: null,
    };
  }
};
