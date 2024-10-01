// Original file: protointerfaces/schema/src/main/proto/usuario.proto

import type { Long } from '@grpc/proto-loader';

export interface Usuario {
  'firstname'?: (string);
  'lastname'?: (string);
  'email'?: (string);
  'address'?: (string);
  'id'?: (number | string | Long);
}

export interface Usuario__Output {
  'firstname'?: (string);
  'lastname'?: (string);
  'email'?: (string);
  'address'?: (string);
  'id'?: (Long);
}
