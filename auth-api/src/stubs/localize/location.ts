/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "location";

export interface Location {
  id?: string;
  taskId?: string;
  label?: string;
  x?: number;
  y?: number;
  context?: string;
}

export interface AddLocationRequest {
  search?: string;
  taskId?: string;
}

export interface AddLocationResponse {
  location?: Location;
}

export interface RemoveLocationRequest {
  id?: string;
}

export interface RemoveLocationResponse {
  location?: Location;
}

export interface EditLocationRequest {
  search?: string;
  id?: number;
}

export interface EditLocationResponse {
  location?: Location;
}

export const LOCATION_PACKAGE_NAME = "location";

export interface LocationServiceClient {
  addLocation(request: AddLocationRequest, metadata?: Metadata): Observable<AddLocationResponse>;

  removeLocation(request: RemoveLocationRequest, metadata?: Metadata): Observable<RemoveLocationResponse>;

  editLocation(request: EditLocationRequest, metadata?: Metadata): Observable<EditLocationResponse>;
}

export interface LocationServiceController {
  addLocation(
    request: AddLocationRequest,
    metadata?: Metadata,
  ): Promise<AddLocationResponse> | Observable<AddLocationResponse> | AddLocationResponse;

  removeLocation(
    request: RemoveLocationRequest,
    metadata?: Metadata,
  ): Promise<RemoveLocationResponse> | Observable<RemoveLocationResponse> | RemoveLocationResponse;

  editLocation(
    request: EditLocationRequest,
    metadata?: Metadata,
  ): Promise<EditLocationResponse> | Observable<EditLocationResponse> | EditLocationResponse;
}

export function LocationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["addLocation", "removeLocation", "editLocation"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("LocationService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("LocationService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const LOCATION_SERVICE_NAME = "LocationService";
