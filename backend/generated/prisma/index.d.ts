
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DynamicId
 * 
 */
export type DynamicId = $Result.DefaultSelection<Prisma.$DynamicIdPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dynamicId`: Exposes CRUD operations for the **DynamicId** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DynamicIds
    * const dynamicIds = await prisma.dynamicId.findMany()
    * ```
    */
  get dynamicId(): Prisma.DynamicIdDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DynamicId: 'DynamicId'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "dynamicId"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DynamicId: {
        payload: Prisma.$DynamicIdPayload<ExtArgs>
        fields: Prisma.DynamicIdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DynamicIdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DynamicIdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload>
          }
          findFirst: {
            args: Prisma.DynamicIdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DynamicIdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload>
          }
          findMany: {
            args: Prisma.DynamicIdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload>[]
          }
          create: {
            args: Prisma.DynamicIdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload>
          }
          createMany: {
            args: Prisma.DynamicIdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DynamicIdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload>[]
          }
          delete: {
            args: Prisma.DynamicIdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload>
          }
          update: {
            args: Prisma.DynamicIdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload>
          }
          deleteMany: {
            args: Prisma.DynamicIdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DynamicIdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DynamicIdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload>[]
          }
          upsert: {
            args: Prisma.DynamicIdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicIdPayload>
          }
          aggregate: {
            args: Prisma.DynamicIdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDynamicId>
          }
          groupBy: {
            args: Prisma.DynamicIdGroupByArgs<ExtArgs>
            result: $Utils.Optional<DynamicIdGroupByOutputType>[]
          }
          count: {
            args: Prisma.DynamicIdCountArgs<ExtArgs>
            result: $Utils.Optional<DynamicIdCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    dynamicId?: DynamicIdOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    aadhar_number: string | null
    picture_url: string | null
    mobile_number: string | null
    token: string | null
    bankId: string | null
    branchId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    aadhar_number: string | null
    picture_url: string | null
    mobile_number: string | null
    token: string | null
    bankId: string | null
    branchId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    aadhar_number: number
    picture_url: number
    mobile_number: number
    token: number
    bankId: number
    branchId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    aadhar_number?: true
    picture_url?: true
    mobile_number?: true
    token?: true
    bankId?: true
    branchId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    aadhar_number?: true
    picture_url?: true
    mobile_number?: true
    token?: true
    bankId?: true
    branchId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    aadhar_number?: true
    picture_url?: true
    mobile_number?: true
    token?: true
    bankId?: true
    branchId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    aadhar_number: string
    picture_url: string
    mobile_number: string
    token: string
    bankId: string
    branchId: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    aadhar_number?: boolean
    picture_url?: boolean
    mobile_number?: boolean
    token?: boolean
    bankId?: boolean
    branchId?: boolean
    dynamicIds?: boolean | User$dynamicIdsArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    aadhar_number?: boolean
    picture_url?: boolean
    mobile_number?: boolean
    token?: boolean
    bankId?: boolean
    branchId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    aadhar_number?: boolean
    picture_url?: boolean
    mobile_number?: boolean
    token?: boolean
    bankId?: boolean
    branchId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    aadhar_number?: boolean
    picture_url?: boolean
    mobile_number?: boolean
    token?: boolean
    bankId?: boolean
    branchId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "aadhar_number" | "picture_url" | "mobile_number" | "token" | "bankId" | "branchId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dynamicIds?: boolean | User$dynamicIdsArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dynamicIds: Prisma.$DynamicIdPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      aadhar_number: string
      picture_url: string
      mobile_number: string
      token: string
      bankId: string
      branchId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dynamicIds<T extends User$dynamicIdsArgs<ExtArgs> = {}>(args?: Subset<T, User$dynamicIdsArgs<ExtArgs>>): Prisma__DynamicIdClient<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly aadhar_number: FieldRef<"User", 'String'>
    readonly picture_url: FieldRef<"User", 'String'>
    readonly mobile_number: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly bankId: FieldRef<"User", 'String'>
    readonly branchId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.dynamicIds
   */
  export type User$dynamicIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    where?: DynamicIdWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DynamicId
   */

  export type AggregateDynamicId = {
    _count: DynamicIdCountAggregateOutputType | null
    _avg: DynamicIdAvgAggregateOutputType | null
    _sum: DynamicIdSumAggregateOutputType | null
    _min: DynamicIdMinAggregateOutputType | null
    _max: DynamicIdMaxAggregateOutputType | null
  }

  export type DynamicIdAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DynamicIdSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DynamicIdMinAggregateOutputType = {
    id: number | null
    dynamicId: string | null
    user_id: number | null
    qrCode: string | null
  }

  export type DynamicIdMaxAggregateOutputType = {
    id: number | null
    dynamicId: string | null
    user_id: number | null
    qrCode: string | null
  }

  export type DynamicIdCountAggregateOutputType = {
    id: number
    dynamicId: number
    user_id: number
    qrCode: number
    _all: number
  }


  export type DynamicIdAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DynamicIdSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DynamicIdMinAggregateInputType = {
    id?: true
    dynamicId?: true
    user_id?: true
    qrCode?: true
  }

  export type DynamicIdMaxAggregateInputType = {
    id?: true
    dynamicId?: true
    user_id?: true
    qrCode?: true
  }

  export type DynamicIdCountAggregateInputType = {
    id?: true
    dynamicId?: true
    user_id?: true
    qrCode?: true
    _all?: true
  }

  export type DynamicIdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicId to aggregate.
     */
    where?: DynamicIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicIds to fetch.
     */
    orderBy?: DynamicIdOrderByWithRelationInput | DynamicIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DynamicIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DynamicIds
    **/
    _count?: true | DynamicIdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DynamicIdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DynamicIdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DynamicIdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DynamicIdMaxAggregateInputType
  }

  export type GetDynamicIdAggregateType<T extends DynamicIdAggregateArgs> = {
        [P in keyof T & keyof AggregateDynamicId]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDynamicId[P]>
      : GetScalarType<T[P], AggregateDynamicId[P]>
  }




  export type DynamicIdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DynamicIdWhereInput
    orderBy?: DynamicIdOrderByWithAggregationInput | DynamicIdOrderByWithAggregationInput[]
    by: DynamicIdScalarFieldEnum[] | DynamicIdScalarFieldEnum
    having?: DynamicIdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DynamicIdCountAggregateInputType | true
    _avg?: DynamicIdAvgAggregateInputType
    _sum?: DynamicIdSumAggregateInputType
    _min?: DynamicIdMinAggregateInputType
    _max?: DynamicIdMaxAggregateInputType
  }

  export type DynamicIdGroupByOutputType = {
    id: number
    dynamicId: string
    user_id: number
    qrCode: string
    _count: DynamicIdCountAggregateOutputType | null
    _avg: DynamicIdAvgAggregateOutputType | null
    _sum: DynamicIdSumAggregateOutputType | null
    _min: DynamicIdMinAggregateOutputType | null
    _max: DynamicIdMaxAggregateOutputType | null
  }

  type GetDynamicIdGroupByPayload<T extends DynamicIdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DynamicIdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DynamicIdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DynamicIdGroupByOutputType[P]>
            : GetScalarType<T[P], DynamicIdGroupByOutputType[P]>
        }
      >
    >


  export type DynamicIdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dynamicId?: boolean
    user_id?: boolean
    qrCode?: boolean
    userId?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dynamicId"]>

  export type DynamicIdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dynamicId?: boolean
    user_id?: boolean
    qrCode?: boolean
    userId?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dynamicId"]>

  export type DynamicIdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dynamicId?: boolean
    user_id?: boolean
    qrCode?: boolean
    userId?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dynamicId"]>

  export type DynamicIdSelectScalar = {
    id?: boolean
    dynamicId?: boolean
    user_id?: boolean
    qrCode?: boolean
  }

  export type DynamicIdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dynamicId" | "user_id" | "qrCode", ExtArgs["result"]["dynamicId"]>
  export type DynamicIdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userId?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DynamicIdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userId?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DynamicIdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userId?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DynamicIdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DynamicId"
    objects: {
      userId: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dynamicId: string
      user_id: number
      qrCode: string
    }, ExtArgs["result"]["dynamicId"]>
    composites: {}
  }

  type DynamicIdGetPayload<S extends boolean | null | undefined | DynamicIdDefaultArgs> = $Result.GetResult<Prisma.$DynamicIdPayload, S>

  type DynamicIdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DynamicIdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DynamicIdCountAggregateInputType | true
    }

  export interface DynamicIdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DynamicId'], meta: { name: 'DynamicId' } }
    /**
     * Find zero or one DynamicId that matches the filter.
     * @param {DynamicIdFindUniqueArgs} args - Arguments to find a DynamicId
     * @example
     * // Get one DynamicId
     * const dynamicId = await prisma.dynamicId.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DynamicIdFindUniqueArgs>(args: SelectSubset<T, DynamicIdFindUniqueArgs<ExtArgs>>): Prisma__DynamicIdClient<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DynamicId that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DynamicIdFindUniqueOrThrowArgs} args - Arguments to find a DynamicId
     * @example
     * // Get one DynamicId
     * const dynamicId = await prisma.dynamicId.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DynamicIdFindUniqueOrThrowArgs>(args: SelectSubset<T, DynamicIdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DynamicIdClient<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DynamicId that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicIdFindFirstArgs} args - Arguments to find a DynamicId
     * @example
     * // Get one DynamicId
     * const dynamicId = await prisma.dynamicId.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DynamicIdFindFirstArgs>(args?: SelectSubset<T, DynamicIdFindFirstArgs<ExtArgs>>): Prisma__DynamicIdClient<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DynamicId that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicIdFindFirstOrThrowArgs} args - Arguments to find a DynamicId
     * @example
     * // Get one DynamicId
     * const dynamicId = await prisma.dynamicId.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DynamicIdFindFirstOrThrowArgs>(args?: SelectSubset<T, DynamicIdFindFirstOrThrowArgs<ExtArgs>>): Prisma__DynamicIdClient<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DynamicIds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicIdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DynamicIds
     * const dynamicIds = await prisma.dynamicId.findMany()
     * 
     * // Get first 10 DynamicIds
     * const dynamicIds = await prisma.dynamicId.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dynamicIdWithIdOnly = await prisma.dynamicId.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DynamicIdFindManyArgs>(args?: SelectSubset<T, DynamicIdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DynamicId.
     * @param {DynamicIdCreateArgs} args - Arguments to create a DynamicId.
     * @example
     * // Create one DynamicId
     * const DynamicId = await prisma.dynamicId.create({
     *   data: {
     *     // ... data to create a DynamicId
     *   }
     * })
     * 
     */
    create<T extends DynamicIdCreateArgs>(args: SelectSubset<T, DynamicIdCreateArgs<ExtArgs>>): Prisma__DynamicIdClient<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DynamicIds.
     * @param {DynamicIdCreateManyArgs} args - Arguments to create many DynamicIds.
     * @example
     * // Create many DynamicIds
     * const dynamicId = await prisma.dynamicId.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DynamicIdCreateManyArgs>(args?: SelectSubset<T, DynamicIdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DynamicIds and returns the data saved in the database.
     * @param {DynamicIdCreateManyAndReturnArgs} args - Arguments to create many DynamicIds.
     * @example
     * // Create many DynamicIds
     * const dynamicId = await prisma.dynamicId.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DynamicIds and only return the `id`
     * const dynamicIdWithIdOnly = await prisma.dynamicId.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DynamicIdCreateManyAndReturnArgs>(args?: SelectSubset<T, DynamicIdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DynamicId.
     * @param {DynamicIdDeleteArgs} args - Arguments to delete one DynamicId.
     * @example
     * // Delete one DynamicId
     * const DynamicId = await prisma.dynamicId.delete({
     *   where: {
     *     // ... filter to delete one DynamicId
     *   }
     * })
     * 
     */
    delete<T extends DynamicIdDeleteArgs>(args: SelectSubset<T, DynamicIdDeleteArgs<ExtArgs>>): Prisma__DynamicIdClient<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DynamicId.
     * @param {DynamicIdUpdateArgs} args - Arguments to update one DynamicId.
     * @example
     * // Update one DynamicId
     * const dynamicId = await prisma.dynamicId.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DynamicIdUpdateArgs>(args: SelectSubset<T, DynamicIdUpdateArgs<ExtArgs>>): Prisma__DynamicIdClient<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DynamicIds.
     * @param {DynamicIdDeleteManyArgs} args - Arguments to filter DynamicIds to delete.
     * @example
     * // Delete a few DynamicIds
     * const { count } = await prisma.dynamicId.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DynamicIdDeleteManyArgs>(args?: SelectSubset<T, DynamicIdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DynamicIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicIdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DynamicIds
     * const dynamicId = await prisma.dynamicId.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DynamicIdUpdateManyArgs>(args: SelectSubset<T, DynamicIdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DynamicIds and returns the data updated in the database.
     * @param {DynamicIdUpdateManyAndReturnArgs} args - Arguments to update many DynamicIds.
     * @example
     * // Update many DynamicIds
     * const dynamicId = await prisma.dynamicId.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DynamicIds and only return the `id`
     * const dynamicIdWithIdOnly = await prisma.dynamicId.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DynamicIdUpdateManyAndReturnArgs>(args: SelectSubset<T, DynamicIdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DynamicId.
     * @param {DynamicIdUpsertArgs} args - Arguments to update or create a DynamicId.
     * @example
     * // Update or create a DynamicId
     * const dynamicId = await prisma.dynamicId.upsert({
     *   create: {
     *     // ... data to create a DynamicId
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DynamicId we want to update
     *   }
     * })
     */
    upsert<T extends DynamicIdUpsertArgs>(args: SelectSubset<T, DynamicIdUpsertArgs<ExtArgs>>): Prisma__DynamicIdClient<$Result.GetResult<Prisma.$DynamicIdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DynamicIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicIdCountArgs} args - Arguments to filter DynamicIds to count.
     * @example
     * // Count the number of DynamicIds
     * const count = await prisma.dynamicId.count({
     *   where: {
     *     // ... the filter for the DynamicIds we want to count
     *   }
     * })
    **/
    count<T extends DynamicIdCountArgs>(
      args?: Subset<T, DynamicIdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DynamicIdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DynamicId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicIdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DynamicIdAggregateArgs>(args: Subset<T, DynamicIdAggregateArgs>): Prisma.PrismaPromise<GetDynamicIdAggregateType<T>>

    /**
     * Group by DynamicId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicIdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DynamicIdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DynamicIdGroupByArgs['orderBy'] }
        : { orderBy?: DynamicIdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DynamicIdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDynamicIdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DynamicId model
   */
  readonly fields: DynamicIdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DynamicId.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DynamicIdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userId<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DynamicId model
   */
  interface DynamicIdFieldRefs {
    readonly id: FieldRef<"DynamicId", 'Int'>
    readonly dynamicId: FieldRef<"DynamicId", 'String'>
    readonly user_id: FieldRef<"DynamicId", 'Int'>
    readonly qrCode: FieldRef<"DynamicId", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DynamicId findUnique
   */
  export type DynamicIdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    /**
     * Filter, which DynamicId to fetch.
     */
    where: DynamicIdWhereUniqueInput
  }

  /**
   * DynamicId findUniqueOrThrow
   */
  export type DynamicIdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    /**
     * Filter, which DynamicId to fetch.
     */
    where: DynamicIdWhereUniqueInput
  }

  /**
   * DynamicId findFirst
   */
  export type DynamicIdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    /**
     * Filter, which DynamicId to fetch.
     */
    where?: DynamicIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicIds to fetch.
     */
    orderBy?: DynamicIdOrderByWithRelationInput | DynamicIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicIds.
     */
    cursor?: DynamicIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicIds.
     */
    distinct?: DynamicIdScalarFieldEnum | DynamicIdScalarFieldEnum[]
  }

  /**
   * DynamicId findFirstOrThrow
   */
  export type DynamicIdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    /**
     * Filter, which DynamicId to fetch.
     */
    where?: DynamicIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicIds to fetch.
     */
    orderBy?: DynamicIdOrderByWithRelationInput | DynamicIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicIds.
     */
    cursor?: DynamicIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicIds.
     */
    distinct?: DynamicIdScalarFieldEnum | DynamicIdScalarFieldEnum[]
  }

  /**
   * DynamicId findMany
   */
  export type DynamicIdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    /**
     * Filter, which DynamicIds to fetch.
     */
    where?: DynamicIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicIds to fetch.
     */
    orderBy?: DynamicIdOrderByWithRelationInput | DynamicIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DynamicIds.
     */
    cursor?: DynamicIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicIds.
     */
    skip?: number
    distinct?: DynamicIdScalarFieldEnum | DynamicIdScalarFieldEnum[]
  }

  /**
   * DynamicId create
   */
  export type DynamicIdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    /**
     * The data needed to create a DynamicId.
     */
    data: XOR<DynamicIdCreateInput, DynamicIdUncheckedCreateInput>
  }

  /**
   * DynamicId createMany
   */
  export type DynamicIdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DynamicIds.
     */
    data: DynamicIdCreateManyInput | DynamicIdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DynamicId createManyAndReturn
   */
  export type DynamicIdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * The data used to create many DynamicIds.
     */
    data: DynamicIdCreateManyInput | DynamicIdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DynamicId update
   */
  export type DynamicIdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    /**
     * The data needed to update a DynamicId.
     */
    data: XOR<DynamicIdUpdateInput, DynamicIdUncheckedUpdateInput>
    /**
     * Choose, which DynamicId to update.
     */
    where: DynamicIdWhereUniqueInput
  }

  /**
   * DynamicId updateMany
   */
  export type DynamicIdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DynamicIds.
     */
    data: XOR<DynamicIdUpdateManyMutationInput, DynamicIdUncheckedUpdateManyInput>
    /**
     * Filter which DynamicIds to update
     */
    where?: DynamicIdWhereInput
    /**
     * Limit how many DynamicIds to update.
     */
    limit?: number
  }

  /**
   * DynamicId updateManyAndReturn
   */
  export type DynamicIdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * The data used to update DynamicIds.
     */
    data: XOR<DynamicIdUpdateManyMutationInput, DynamicIdUncheckedUpdateManyInput>
    /**
     * Filter which DynamicIds to update
     */
    where?: DynamicIdWhereInput
    /**
     * Limit how many DynamicIds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DynamicId upsert
   */
  export type DynamicIdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    /**
     * The filter to search for the DynamicId to update in case it exists.
     */
    where: DynamicIdWhereUniqueInput
    /**
     * In case the DynamicId found by the `where` argument doesn't exist, create a new DynamicId with this data.
     */
    create: XOR<DynamicIdCreateInput, DynamicIdUncheckedCreateInput>
    /**
     * In case the DynamicId was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DynamicIdUpdateInput, DynamicIdUncheckedUpdateInput>
  }

  /**
   * DynamicId delete
   */
  export type DynamicIdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
    /**
     * Filter which DynamicId to delete.
     */
    where: DynamicIdWhereUniqueInput
  }

  /**
   * DynamicId deleteMany
   */
  export type DynamicIdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicIds to delete
     */
    where?: DynamicIdWhereInput
    /**
     * Limit how many DynamicIds to delete.
     */
    limit?: number
  }

  /**
   * DynamicId without action
   */
  export type DynamicIdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicId
     */
    select?: DynamicIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicId
     */
    omit?: DynamicIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DynamicIdInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    aadhar_number: 'aadhar_number',
    picture_url: 'picture_url',
    mobile_number: 'mobile_number',
    token: 'token',
    bankId: 'bankId',
    branchId: 'branchId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DynamicIdScalarFieldEnum: {
    id: 'id',
    dynamicId: 'dynamicId',
    user_id: 'user_id',
    qrCode: 'qrCode'
  };

  export type DynamicIdScalarFieldEnum = (typeof DynamicIdScalarFieldEnum)[keyof typeof DynamicIdScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    aadhar_number?: StringFilter<"User"> | string
    picture_url?: StringFilter<"User"> | string
    mobile_number?: StringFilter<"User"> | string
    token?: StringFilter<"User"> | string
    bankId?: StringFilter<"User"> | string
    branchId?: StringFilter<"User"> | string
    dynamicIds?: XOR<DynamicIdNullableScalarRelationFilter, DynamicIdWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    aadhar_number?: SortOrder
    picture_url?: SortOrder
    mobile_number?: SortOrder
    token?: SortOrder
    bankId?: SortOrder
    branchId?: SortOrder
    dynamicIds?: DynamicIdOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    aadhar_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    picture_url?: StringFilter<"User"> | string
    mobile_number?: StringFilter<"User"> | string
    token?: StringFilter<"User"> | string
    bankId?: StringFilter<"User"> | string
    branchId?: StringFilter<"User"> | string
    dynamicIds?: XOR<DynamicIdNullableScalarRelationFilter, DynamicIdWhereInput> | null
  }, "id" | "id" | "aadhar_number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    aadhar_number?: SortOrder
    picture_url?: SortOrder
    mobile_number?: SortOrder
    token?: SortOrder
    bankId?: SortOrder
    branchId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    aadhar_number?: StringWithAggregatesFilter<"User"> | string
    picture_url?: StringWithAggregatesFilter<"User"> | string
    mobile_number?: StringWithAggregatesFilter<"User"> | string
    token?: StringWithAggregatesFilter<"User"> | string
    bankId?: StringWithAggregatesFilter<"User"> | string
    branchId?: StringWithAggregatesFilter<"User"> | string
  }

  export type DynamicIdWhereInput = {
    AND?: DynamicIdWhereInput | DynamicIdWhereInput[]
    OR?: DynamicIdWhereInput[]
    NOT?: DynamicIdWhereInput | DynamicIdWhereInput[]
    id?: IntFilter<"DynamicId"> | number
    dynamicId?: StringFilter<"DynamicId"> | string
    user_id?: IntFilter<"DynamicId"> | number
    qrCode?: StringFilter<"DynamicId"> | string
    userId?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DynamicIdOrderByWithRelationInput = {
    id?: SortOrder
    dynamicId?: SortOrder
    user_id?: SortOrder
    qrCode?: SortOrder
    userId?: UserOrderByWithRelationInput
  }

  export type DynamicIdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dynamicId?: string
    user_id?: number
    AND?: DynamicIdWhereInput | DynamicIdWhereInput[]
    OR?: DynamicIdWhereInput[]
    NOT?: DynamicIdWhereInput | DynamicIdWhereInput[]
    qrCode?: StringFilter<"DynamicId"> | string
    userId?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id" | "dynamicId" | "user_id">

  export type DynamicIdOrderByWithAggregationInput = {
    id?: SortOrder
    dynamicId?: SortOrder
    user_id?: SortOrder
    qrCode?: SortOrder
    _count?: DynamicIdCountOrderByAggregateInput
    _avg?: DynamicIdAvgOrderByAggregateInput
    _max?: DynamicIdMaxOrderByAggregateInput
    _min?: DynamicIdMinOrderByAggregateInput
    _sum?: DynamicIdSumOrderByAggregateInput
  }

  export type DynamicIdScalarWhereWithAggregatesInput = {
    AND?: DynamicIdScalarWhereWithAggregatesInput | DynamicIdScalarWhereWithAggregatesInput[]
    OR?: DynamicIdScalarWhereWithAggregatesInput[]
    NOT?: DynamicIdScalarWhereWithAggregatesInput | DynamicIdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DynamicId"> | number
    dynamicId?: StringWithAggregatesFilter<"DynamicId"> | string
    user_id?: IntWithAggregatesFilter<"DynamicId"> | number
    qrCode?: StringWithAggregatesFilter<"DynamicId"> | string
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    aadhar_number: string
    picture_url: string
    mobile_number?: string
    token?: string
    bankId?: string
    branchId?: string
    dynamicIds?: DynamicIdCreateNestedOneWithoutUserIdInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    aadhar_number: string
    picture_url: string
    mobile_number?: string
    token?: string
    bankId?: string
    branchId?: string
    dynamicIds?: DynamicIdUncheckedCreateNestedOneWithoutUserIdInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    aadhar_number?: StringFieldUpdateOperationsInput | string
    picture_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    dynamicIds?: DynamicIdUpdateOneWithoutUserIdNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    aadhar_number?: StringFieldUpdateOperationsInput | string
    picture_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    dynamicIds?: DynamicIdUncheckedUpdateOneWithoutUserIdNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    aadhar_number: string
    picture_url: string
    mobile_number?: string
    token?: string
    bankId?: string
    branchId?: string
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    aadhar_number?: StringFieldUpdateOperationsInput | string
    picture_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    aadhar_number?: StringFieldUpdateOperationsInput | string
    picture_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
  }

  export type DynamicIdCreateInput = {
    dynamicId: string
    qrCode?: string
    userId: UserCreateNestedOneWithoutDynamicIdsInput
  }

  export type DynamicIdUncheckedCreateInput = {
    id?: number
    dynamicId: string
    user_id: number
    qrCode?: string
  }

  export type DynamicIdUpdateInput = {
    dynamicId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userId?: UserUpdateOneRequiredWithoutDynamicIdsNestedInput
  }

  export type DynamicIdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dynamicId?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
  }

  export type DynamicIdCreateManyInput = {
    id?: number
    dynamicId: string
    user_id: number
    qrCode?: string
  }

  export type DynamicIdUpdateManyMutationInput = {
    dynamicId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
  }

  export type DynamicIdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dynamicId?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    qrCode?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DynamicIdNullableScalarRelationFilter = {
    is?: DynamicIdWhereInput | null
    isNot?: DynamicIdWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    aadhar_number?: SortOrder
    picture_url?: SortOrder
    mobile_number?: SortOrder
    token?: SortOrder
    bankId?: SortOrder
    branchId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    aadhar_number?: SortOrder
    picture_url?: SortOrder
    mobile_number?: SortOrder
    token?: SortOrder
    bankId?: SortOrder
    branchId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    aadhar_number?: SortOrder
    picture_url?: SortOrder
    mobile_number?: SortOrder
    token?: SortOrder
    bankId?: SortOrder
    branchId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DynamicIdCountOrderByAggregateInput = {
    id?: SortOrder
    dynamicId?: SortOrder
    user_id?: SortOrder
    qrCode?: SortOrder
  }

  export type DynamicIdAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DynamicIdMaxOrderByAggregateInput = {
    id?: SortOrder
    dynamicId?: SortOrder
    user_id?: SortOrder
    qrCode?: SortOrder
  }

  export type DynamicIdMinOrderByAggregateInput = {
    id?: SortOrder
    dynamicId?: SortOrder
    user_id?: SortOrder
    qrCode?: SortOrder
  }

  export type DynamicIdSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DynamicIdCreateNestedOneWithoutUserIdInput = {
    create?: XOR<DynamicIdCreateWithoutUserIdInput, DynamicIdUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: DynamicIdCreateOrConnectWithoutUserIdInput
    connect?: DynamicIdWhereUniqueInput
  }

  export type DynamicIdUncheckedCreateNestedOneWithoutUserIdInput = {
    create?: XOR<DynamicIdCreateWithoutUserIdInput, DynamicIdUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: DynamicIdCreateOrConnectWithoutUserIdInput
    connect?: DynamicIdWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DynamicIdUpdateOneWithoutUserIdNestedInput = {
    create?: XOR<DynamicIdCreateWithoutUserIdInput, DynamicIdUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: DynamicIdCreateOrConnectWithoutUserIdInput
    upsert?: DynamicIdUpsertWithoutUserIdInput
    disconnect?: DynamicIdWhereInput | boolean
    delete?: DynamicIdWhereInput | boolean
    connect?: DynamicIdWhereUniqueInput
    update?: XOR<XOR<DynamicIdUpdateToOneWithWhereWithoutUserIdInput, DynamicIdUpdateWithoutUserIdInput>, DynamicIdUncheckedUpdateWithoutUserIdInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DynamicIdUncheckedUpdateOneWithoutUserIdNestedInput = {
    create?: XOR<DynamicIdCreateWithoutUserIdInput, DynamicIdUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: DynamicIdCreateOrConnectWithoutUserIdInput
    upsert?: DynamicIdUpsertWithoutUserIdInput
    disconnect?: DynamicIdWhereInput | boolean
    delete?: DynamicIdWhereInput | boolean
    connect?: DynamicIdWhereUniqueInput
    update?: XOR<XOR<DynamicIdUpdateToOneWithWhereWithoutUserIdInput, DynamicIdUpdateWithoutUserIdInput>, DynamicIdUncheckedUpdateWithoutUserIdInput>
  }

  export type UserCreateNestedOneWithoutDynamicIdsInput = {
    create?: XOR<UserCreateWithoutDynamicIdsInput, UserUncheckedCreateWithoutDynamicIdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDynamicIdsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDynamicIdsNestedInput = {
    create?: XOR<UserCreateWithoutDynamicIdsInput, UserUncheckedCreateWithoutDynamicIdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDynamicIdsInput
    upsert?: UserUpsertWithoutDynamicIdsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDynamicIdsInput, UserUpdateWithoutDynamicIdsInput>, UserUncheckedUpdateWithoutDynamicIdsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DynamicIdCreateWithoutUserIdInput = {
    dynamicId: string
    qrCode?: string
  }

  export type DynamicIdUncheckedCreateWithoutUserIdInput = {
    id?: number
    dynamicId: string
    qrCode?: string
  }

  export type DynamicIdCreateOrConnectWithoutUserIdInput = {
    where: DynamicIdWhereUniqueInput
    create: XOR<DynamicIdCreateWithoutUserIdInput, DynamicIdUncheckedCreateWithoutUserIdInput>
  }

  export type DynamicIdUpsertWithoutUserIdInput = {
    update: XOR<DynamicIdUpdateWithoutUserIdInput, DynamicIdUncheckedUpdateWithoutUserIdInput>
    create: XOR<DynamicIdCreateWithoutUserIdInput, DynamicIdUncheckedCreateWithoutUserIdInput>
    where?: DynamicIdWhereInput
  }

  export type DynamicIdUpdateToOneWithWhereWithoutUserIdInput = {
    where?: DynamicIdWhereInput
    data: XOR<DynamicIdUpdateWithoutUserIdInput, DynamicIdUncheckedUpdateWithoutUserIdInput>
  }

  export type DynamicIdUpdateWithoutUserIdInput = {
    dynamicId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
  }

  export type DynamicIdUncheckedUpdateWithoutUserIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    dynamicId?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutDynamicIdsInput = {
    first_name: string
    last_name: string
    aadhar_number: string
    picture_url: string
    mobile_number?: string
    token?: string
    bankId?: string
    branchId?: string
  }

  export type UserUncheckedCreateWithoutDynamicIdsInput = {
    id?: number
    first_name: string
    last_name: string
    aadhar_number: string
    picture_url: string
    mobile_number?: string
    token?: string
    bankId?: string
    branchId?: string
  }

  export type UserCreateOrConnectWithoutDynamicIdsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDynamicIdsInput, UserUncheckedCreateWithoutDynamicIdsInput>
  }

  export type UserUpsertWithoutDynamicIdsInput = {
    update: XOR<UserUpdateWithoutDynamicIdsInput, UserUncheckedUpdateWithoutDynamicIdsInput>
    create: XOR<UserCreateWithoutDynamicIdsInput, UserUncheckedCreateWithoutDynamicIdsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDynamicIdsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDynamicIdsInput, UserUncheckedUpdateWithoutDynamicIdsInput>
  }

  export type UserUpdateWithoutDynamicIdsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    aadhar_number?: StringFieldUpdateOperationsInput | string
    picture_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutDynamicIdsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    aadhar_number?: StringFieldUpdateOperationsInput | string
    picture_url?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}