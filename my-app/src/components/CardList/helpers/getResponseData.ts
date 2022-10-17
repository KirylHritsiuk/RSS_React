import { API } from 'interfaces/API';
import { Character } from 'interfaces/character.interface';
import { APIError } from 'interfaces/error.interface';

export const getResponseData = (data: API | Character[] | Character | APIError) => {
  if (data instanceof Array) {
    return {
      character: data,
      totalPages: 0,
      prev: null,
      next: null,
      error: null,
    };
  } else if ('error' in data) {
    return {
      character: [],
      totalPages: 0,
      prev: null,
      next: null,
      error: data.error,
    };
  } else if ('info' in data) {
    return {
      character: data.results,
      totalPages: data.info?.pages,
      prev: data.info.prev,
      next: data.info.next,
      error: null,
    };
  } else {
    return {
      character: [data],
      totalPages: 0,
      prev: null,
      next: null,
      error: null,
    };
  }
};
