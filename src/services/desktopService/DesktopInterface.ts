import {useTypesEnum} from '../../enums/UseTypes';

export interface DesktopInterface {
  id: string;
  modelName: string;
  price: number;
  useType: useTypesEnum;
  withMonitor: boolean;
  withPeripherals: boolean;
}