[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / ECIES

# Class: ECIES

[bsv](../modules/bsv.md).ECIES

## Table of contents

### Constructors

- [constructor](bsv.ECIES.md#constructor)

### Methods

- [decrypt](bsv.ECIES.md#decrypt)
- [encrypt](bsv.ECIES.md#encrypt)
- [privateKey](bsv.ECIES.md#privatekey)
- [publicKey](bsv.ECIES.md#publickey)

## Constructors

### constructor

• **new ECIES**(`opts?`, `algorithm?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `any` |
| `algorithm?` | `string` |

#### Defined in

node_modules/bsv/index.d.ts:556

## Methods

### decrypt

▸ **decrypt**(`encbuf`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encbuf` | `Buffer` |

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:561

___

### encrypt

▸ **encrypt**(`message`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `Buffer` |

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:560

___

### privateKey

▸ **privateKey**(`privateKey`): [`ECIES`](bsv.ECIES.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](bsv.PrivateKey.md) |

#### Returns

[`ECIES`](bsv.ECIES.md)

#### Defined in

node_modules/bsv/index.d.ts:558

___

### publicKey

▸ **publicKey**(`publicKey`): [`ECIES`](bsv.ECIES.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](bsv.PublicKey.md) |

#### Returns

[`ECIES`](bsv.ECIES.md)

#### Defined in

node_modules/bsv/index.d.ts:559
