import { API } from 'interfaces/API';
import { Character } from 'interfaces/character.interface';
import { Episode } from 'interfaces/episode.interface';
import { Location } from 'interfaces/location.interface';
import { APIError } from 'interfaces/error.interface';

export const getResponseData = (
  data: API | (Character | Episode | Location)[] | Character | Episode | Location | APIError
) => {
  if (data instanceof Array) {
    return {
      character: data,
      totalPages: 0,
      prev: null,
      next: null,
      error: null,
    };
  } else if ('info' in data) {
    return {
      character: data.results,
      totalPages: data.info?.pages,
      prev: data.info.prev,
      next: data.info.next,
      error: null,
    };
  } else if ('gender' in data) {
    return {
      character: [data],
      totalPages: 0,
      prev: null,
      next: null,
      error: null,
    };
  } else if ('dimension' in data) {
    return {
      character: [data],
      totalPages: 0,
      prev: null,
      next: null,
      error: null,
    };
  } else if ('air_date' in data) {
    return {
      character: [data],
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
  }
};
