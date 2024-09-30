// Original file: protointerfaces/schema/src/main/proto/usuario.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _Empty, Empty__Output as _Empty__Output } from './Empty';
import type { Usuarios as _Usuarios, Usuarios__Output as _Usuarios__Output } from './Usuarios';

export interface ServiceUsuarioClient extends grpc.Client {
  GetUsuarios(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Usuarios__Output>): grpc.ClientUnaryCall;
  GetUsuarios(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_Usuarios__Output>): grpc.ClientUnaryCall;
  GetUsuarios(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_Usuarios__Output>): grpc.ClientUnaryCall;
  GetUsuarios(argument: _Empty, callback: grpc.requestCallback<_Usuarios__Output>): grpc.ClientUnaryCall;
  getUsuarios(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Usuarios__Output>): grpc.ClientUnaryCall;
  getUsuarios(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_Usuarios__Output>): grpc.ClientUnaryCall;
  getUsuarios(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_Usuarios__Output>): grpc.ClientUnaryCall;
  getUsuarios(argument: _Empty, callback: grpc.requestCallback<_Usuarios__Output>): grpc.ClientUnaryCall;
  
}

export interface ServiceUsuarioHandlers extends grpc.UntypedServiceImplementation {
  GetUsuarios: grpc.handleUnaryCall<_Empty__Output, _Usuarios>;
  
}

export interface ServiceUsuarioDefinition extends grpc.ServiceDefinition {
  GetUsuarios: MethodDefinition<_Empty, _Usuarios, _Empty__Output, _Usuarios__Output>
}
