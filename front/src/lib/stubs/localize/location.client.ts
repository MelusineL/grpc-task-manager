// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "localize/location.proto" (package "location", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { LocationService } from "./location";
import type { EditLocationResponse } from "./location";
import type { EditLocationRequest } from "./location";
import type { RemoveLocationResponse } from "./location";
import type { RemoveLocationRequest } from "./location";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { AddLocationResponse } from "./location";
import type { AddLocationRequest } from "./location";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service location.LocationService
 */
export interface ILocationServiceClient {
    /**
     * @generated from protobuf rpc: AddLocation(location.AddLocationRequest) returns (location.AddLocationResponse);
     */
    addLocation(input: AddLocationRequest, options?: RpcOptions): UnaryCall<AddLocationRequest, AddLocationResponse>;
    /**
     * @generated from protobuf rpc: RemoveLocation(location.RemoveLocationRequest) returns (location.RemoveLocationResponse);
     */
    removeLocation(input: RemoveLocationRequest, options?: RpcOptions): UnaryCall<RemoveLocationRequest, RemoveLocationResponse>;
    /**
     * @generated from protobuf rpc: EditLocation(location.EditLocationRequest) returns (location.EditLocationResponse);
     */
    editLocation(input: EditLocationRequest, options?: RpcOptions): UnaryCall<EditLocationRequest, EditLocationResponse>;
}
/**
 * @generated from protobuf service location.LocationService
 */
export class LocationServiceClient implements ILocationServiceClient, ServiceInfo {
    typeName = LocationService.typeName;
    methods = LocationService.methods;
    options = LocationService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: AddLocation(location.AddLocationRequest) returns (location.AddLocationResponse);
     */
    addLocation(input: AddLocationRequest, options?: RpcOptions): UnaryCall<AddLocationRequest, AddLocationResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<AddLocationRequest, AddLocationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RemoveLocation(location.RemoveLocationRequest) returns (location.RemoveLocationResponse);
     */
    removeLocation(input: RemoveLocationRequest, options?: RpcOptions): UnaryCall<RemoveLocationRequest, RemoveLocationResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<RemoveLocationRequest, RemoveLocationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: EditLocation(location.EditLocationRequest) returns (location.EditLocationResponse);
     */
    editLocation(input: EditLocationRequest, options?: RpcOptions): UnaryCall<EditLocationRequest, EditLocationResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<EditLocationRequest, EditLocationResponse>("unary", this._transport, method, opt, input);
    }
}
