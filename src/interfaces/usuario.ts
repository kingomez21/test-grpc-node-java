// Original file: protointerfaces/schema/src/main/proto/usuario.proto


export interface Usuario {
  'firstname'?: (string);
  'lastname'?: (string);
  'email'?: (string);
  'address'?: (string);
}

export interface Usuario__Output {
  'firstname'?: (string);
  'lastname'?: (string);
  'email'?: (string);
  'address'?: (string);
}
= {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Empty: MessageTypeDefinition
  ServiceUsuario: SubtypeConstructor<typeof grpc.Client, _ServiceUsuarioClient> & { service: _ServiceUsuarioDefinition }
  Usuario: MessageTypeDefinition
  Usuarios: MessageTypeDefinition
}

