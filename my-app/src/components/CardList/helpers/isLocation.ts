import { CAT } from 'interfaces/API';
import { Location } from 'interfaces/location.interface';

export function isLocation(data: CAT[] | null): data is Location[] {
  return data ? (data as Location[])[0].dimension !== undefined : false;
}
