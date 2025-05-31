
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
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model NewsBlock
 * 
 */
export type NewsBlock = $Result.DefaultSelection<Prisma.$NewsBlockPayload>
/**
 * Model NewsBlockImage
 * 
 */
export type NewsBlockImage = $Result.DefaultSelection<Prisma.$NewsBlockImagePayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Sermon
 * 
 */
export type Sermon = $Result.DefaultSelection<Prisma.$SermonPayload>
/**
 * Model SermonBlock
 * 
 */
export type SermonBlock = $Result.DefaultSelection<Prisma.$SermonBlockPayload>
/**
 * Model SermonBlockImage
 * 
 */
export type SermonBlockImage = $Result.DefaultSelection<Prisma.$SermonBlockImagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more News
 * const news = await prisma.news.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more News
   * const news = await prisma.news.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsBlock`: Exposes CRUD operations for the **NewsBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsBlocks
    * const newsBlocks = await prisma.newsBlock.findMany()
    * ```
    */
  get newsBlock(): Prisma.NewsBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsBlockImage`: Exposes CRUD operations for the **NewsBlockImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsBlockImages
    * const newsBlockImages = await prisma.newsBlockImage.findMany()
    * ```
    */
  get newsBlockImage(): Prisma.NewsBlockImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sermon`: Exposes CRUD operations for the **Sermon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sermons
    * const sermons = await prisma.sermon.findMany()
    * ```
    */
  get sermon(): Prisma.SermonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sermonBlock`: Exposes CRUD operations for the **SermonBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SermonBlocks
    * const sermonBlocks = await prisma.sermonBlock.findMany()
    * ```
    */
  get sermonBlock(): Prisma.SermonBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sermonBlockImage`: Exposes CRUD operations for the **SermonBlockImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SermonBlockImages
    * const sermonBlockImages = await prisma.sermonBlockImage.findMany()
    * ```
    */
  get sermonBlockImage(): Prisma.SermonBlockImageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    News: 'News',
    NewsBlock: 'NewsBlock',
    NewsBlockImage: 'NewsBlockImage',
    Image: 'Image',
    Sermon: 'Sermon',
    SermonBlock: 'SermonBlock',
    SermonBlockImage: 'SermonBlockImage'
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
      modelProps: "news" | "newsBlock" | "newsBlockImage" | "image" | "sermon" | "sermonBlock" | "sermonBlockImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      NewsBlock: {
        payload: Prisma.$NewsBlockPayload<ExtArgs>
        fields: Prisma.NewsBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload>
          }
          findFirst: {
            args: Prisma.NewsBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload>
          }
          findMany: {
            args: Prisma.NewsBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload>[]
          }
          create: {
            args: Prisma.NewsBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload>
          }
          createMany: {
            args: Prisma.NewsBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload>[]
          }
          delete: {
            args: Prisma.NewsBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload>
          }
          update: {
            args: Prisma.NewsBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload>
          }
          deleteMany: {
            args: Prisma.NewsBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload>[]
          }
          upsert: {
            args: Prisma.NewsBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockPayload>
          }
          aggregate: {
            args: Prisma.NewsBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsBlock>
          }
          groupBy: {
            args: Prisma.NewsBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsBlockCountArgs<ExtArgs>
            result: $Utils.Optional<NewsBlockCountAggregateOutputType> | number
          }
        }
      }
      NewsBlockImage: {
        payload: Prisma.$NewsBlockImagePayload<ExtArgs>
        fields: Prisma.NewsBlockImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsBlockImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsBlockImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload>
          }
          findFirst: {
            args: Prisma.NewsBlockImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsBlockImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload>
          }
          findMany: {
            args: Prisma.NewsBlockImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload>[]
          }
          create: {
            args: Prisma.NewsBlockImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload>
          }
          createMany: {
            args: Prisma.NewsBlockImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsBlockImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload>[]
          }
          delete: {
            args: Prisma.NewsBlockImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload>
          }
          update: {
            args: Prisma.NewsBlockImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload>
          }
          deleteMany: {
            args: Prisma.NewsBlockImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsBlockImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsBlockImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload>[]
          }
          upsert: {
            args: Prisma.NewsBlockImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlockImagePayload>
          }
          aggregate: {
            args: Prisma.NewsBlockImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsBlockImage>
          }
          groupBy: {
            args: Prisma.NewsBlockImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsBlockImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsBlockImageCountArgs<ExtArgs>
            result: $Utils.Optional<NewsBlockImageCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Sermon: {
        payload: Prisma.$SermonPayload<ExtArgs>
        fields: Prisma.SermonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SermonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SermonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          findFirst: {
            args: Prisma.SermonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SermonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          findMany: {
            args: Prisma.SermonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>[]
          }
          create: {
            args: Prisma.SermonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          createMany: {
            args: Prisma.SermonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SermonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>[]
          }
          delete: {
            args: Prisma.SermonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          update: {
            args: Prisma.SermonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          deleteMany: {
            args: Prisma.SermonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SermonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SermonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>[]
          }
          upsert: {
            args: Prisma.SermonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          aggregate: {
            args: Prisma.SermonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSermon>
          }
          groupBy: {
            args: Prisma.SermonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SermonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SermonCountArgs<ExtArgs>
            result: $Utils.Optional<SermonCountAggregateOutputType> | number
          }
        }
      }
      SermonBlock: {
        payload: Prisma.$SermonBlockPayload<ExtArgs>
        fields: Prisma.SermonBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SermonBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SermonBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload>
          }
          findFirst: {
            args: Prisma.SermonBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SermonBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload>
          }
          findMany: {
            args: Prisma.SermonBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload>[]
          }
          create: {
            args: Prisma.SermonBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload>
          }
          createMany: {
            args: Prisma.SermonBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SermonBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload>[]
          }
          delete: {
            args: Prisma.SermonBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload>
          }
          update: {
            args: Prisma.SermonBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload>
          }
          deleteMany: {
            args: Prisma.SermonBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SermonBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SermonBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload>[]
          }
          upsert: {
            args: Prisma.SermonBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockPayload>
          }
          aggregate: {
            args: Prisma.SermonBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSermonBlock>
          }
          groupBy: {
            args: Prisma.SermonBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<SermonBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.SermonBlockCountArgs<ExtArgs>
            result: $Utils.Optional<SermonBlockCountAggregateOutputType> | number
          }
        }
      }
      SermonBlockImage: {
        payload: Prisma.$SermonBlockImagePayload<ExtArgs>
        fields: Prisma.SermonBlockImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SermonBlockImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SermonBlockImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload>
          }
          findFirst: {
            args: Prisma.SermonBlockImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SermonBlockImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload>
          }
          findMany: {
            args: Prisma.SermonBlockImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload>[]
          }
          create: {
            args: Prisma.SermonBlockImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload>
          }
          createMany: {
            args: Prisma.SermonBlockImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SermonBlockImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload>[]
          }
          delete: {
            args: Prisma.SermonBlockImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload>
          }
          update: {
            args: Prisma.SermonBlockImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload>
          }
          deleteMany: {
            args: Prisma.SermonBlockImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SermonBlockImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SermonBlockImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload>[]
          }
          upsert: {
            args: Prisma.SermonBlockImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonBlockImagePayload>
          }
          aggregate: {
            args: Prisma.SermonBlockImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSermonBlockImage>
          }
          groupBy: {
            args: Prisma.SermonBlockImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SermonBlockImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SermonBlockImageCountArgs<ExtArgs>
            result: $Utils.Optional<SermonBlockImageCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    news?: NewsOmit
    newsBlock?: NewsBlockOmit
    newsBlockImage?: NewsBlockImageOmit
    image?: ImageOmit
    sermon?: SermonOmit
    sermonBlock?: SermonBlockOmit
    sermonBlockImage?: SermonBlockImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    news_blocks: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_blocks?: boolean | NewsCountOutputTypeCountNews_blocksArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountNews_blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsBlockWhereInput
  }


  /**
   * Count Type NewsBlockCountOutputType
   */

  export type NewsBlockCountOutputType = {
    news_block_images: number
  }

  export type NewsBlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_block_images?: boolean | NewsBlockCountOutputTypeCountNews_block_imagesArgs
  }

  // Custom InputTypes
  /**
   * NewsBlockCountOutputType without action
   */
  export type NewsBlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockCountOutputType
     */
    select?: NewsBlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsBlockCountOutputType without action
   */
  export type NewsBlockCountOutputTypeCountNews_block_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsBlockImageWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    NewsBlockImages: number
    SermonsBlockImages: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NewsBlockImages?: boolean | ImageCountOutputTypeCountNewsBlockImagesArgs
    SermonsBlockImages?: boolean | ImageCountOutputTypeCountSermonsBlockImagesArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountNewsBlockImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsBlockImageWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountSermonsBlockImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SermonBlockImageWhereInput
  }


  /**
   * Count Type SermonCountOutputType
   */

  export type SermonCountOutputType = {
    sermon_blocks: number
  }

  export type SermonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon_blocks?: boolean | SermonCountOutputTypeCountSermon_blocksArgs
  }

  // Custom InputTypes
  /**
   * SermonCountOutputType without action
   */
  export type SermonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonCountOutputType
     */
    select?: SermonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SermonCountOutputType without action
   */
  export type SermonCountOutputTypeCountSermon_blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SermonBlockWhereInput
  }


  /**
   * Count Type SermonBlockCountOutputType
   */

  export type SermonBlockCountOutputType = {
    sermon_block_images: number
  }

  export type SermonBlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon_block_images?: boolean | SermonBlockCountOutputTypeCountSermon_block_imagesArgs
  }

  // Custom InputTypes
  /**
   * SermonBlockCountOutputType without action
   */
  export type SermonBlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockCountOutputType
     */
    select?: SermonBlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SermonBlockCountOutputType without action
   */
  export type SermonBlockCountOutputTypeCountSermon_block_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SermonBlockImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsSumAggregateOutputType = {
    id: bigint | null
  }

  export type NewsMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    is_published: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    is_published: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    is_published: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    id?: true
  }

  export type NewsSumAggregateInputType = {
    id?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    is_published?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    is_published?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    is_published?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: bigint
    title: string | null
    is_published: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    news_blocks?: boolean | News$news_blocksArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "is_published" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_blocks?: boolean | News$news_blocksArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      news_blocks: Prisma.$NewsBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string | null
      is_published: boolean
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news_blocks<T extends News$news_blocksArgs<ExtArgs> = {}>(args?: Subset<T, News$news_blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'BigInt'>
    readonly title: FieldRef<"News", 'String'>
    readonly is_published: FieldRef<"News", 'Boolean'>
    readonly created_at: FieldRef<"News", 'DateTime'>
    readonly updated_at: FieldRef<"News", 'DateTime'>
    readonly deleted_at: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.news_blocks
   */
  export type News$news_blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    where?: NewsBlockWhereInput
    orderBy?: NewsBlockOrderByWithRelationInput | NewsBlockOrderByWithRelationInput[]
    cursor?: NewsBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsBlockScalarFieldEnum | NewsBlockScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model NewsBlock
   */

  export type AggregateNewsBlock = {
    _count: NewsBlockCountAggregateOutputType | null
    _avg: NewsBlockAvgAggregateOutputType | null
    _sum: NewsBlockSumAggregateOutputType | null
    _min: NewsBlockMinAggregateOutputType | null
    _max: NewsBlockMaxAggregateOutputType | null
  }

  export type NewsBlockAvgAggregateOutputType = {
    id: number | null
    news_id: number | null
    order: number | null
  }

  export type NewsBlockSumAggregateOutputType = {
    id: bigint | null
    news_id: bigint | null
    order: bigint | null
  }

  export type NewsBlockMinAggregateOutputType = {
    id: bigint | null
    news_id: bigint | null
    title: string | null
    content: string | null
    order: bigint | null
  }

  export type NewsBlockMaxAggregateOutputType = {
    id: bigint | null
    news_id: bigint | null
    title: string | null
    content: string | null
    order: bigint | null
  }

  export type NewsBlockCountAggregateOutputType = {
    id: number
    news_id: number
    title: number
    content: number
    order: number
    _all: number
  }


  export type NewsBlockAvgAggregateInputType = {
    id?: true
    news_id?: true
    order?: true
  }

  export type NewsBlockSumAggregateInputType = {
    id?: true
    news_id?: true
    order?: true
  }

  export type NewsBlockMinAggregateInputType = {
    id?: true
    news_id?: true
    title?: true
    content?: true
    order?: true
  }

  export type NewsBlockMaxAggregateInputType = {
    id?: true
    news_id?: true
    title?: true
    content?: true
    order?: true
  }

  export type NewsBlockCountAggregateInputType = {
    id?: true
    news_id?: true
    title?: true
    content?: true
    order?: true
    _all?: true
  }

  export type NewsBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsBlock to aggregate.
     */
    where?: NewsBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlocks to fetch.
     */
    orderBy?: NewsBlockOrderByWithRelationInput | NewsBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsBlocks
    **/
    _count?: true | NewsBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsBlockMaxAggregateInputType
  }

  export type GetNewsBlockAggregateType<T extends NewsBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsBlock[P]>
      : GetScalarType<T[P], AggregateNewsBlock[P]>
  }




  export type NewsBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsBlockWhereInput
    orderBy?: NewsBlockOrderByWithAggregationInput | NewsBlockOrderByWithAggregationInput[]
    by: NewsBlockScalarFieldEnum[] | NewsBlockScalarFieldEnum
    having?: NewsBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsBlockCountAggregateInputType | true
    _avg?: NewsBlockAvgAggregateInputType
    _sum?: NewsBlockSumAggregateInputType
    _min?: NewsBlockMinAggregateInputType
    _max?: NewsBlockMaxAggregateInputType
  }

  export type NewsBlockGroupByOutputType = {
    id: bigint
    news_id: bigint
    title: string | null
    content: string | null
    order: bigint
    _count: NewsBlockCountAggregateOutputType | null
    _avg: NewsBlockAvgAggregateOutputType | null
    _sum: NewsBlockSumAggregateOutputType | null
    _min: NewsBlockMinAggregateOutputType | null
    _max: NewsBlockMaxAggregateOutputType | null
  }

  type GetNewsBlockGroupByPayload<T extends NewsBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsBlockGroupByOutputType[P]>
            : GetScalarType<T[P], NewsBlockGroupByOutputType[P]>
        }
      >
    >


  export type NewsBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    news_id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    news_block_images?: boolean | NewsBlock$news_block_imagesArgs<ExtArgs>
    _count?: boolean | NewsBlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsBlock"]>

  export type NewsBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    news_id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsBlock"]>

  export type NewsBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    news_id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsBlock"]>

  export type NewsBlockSelectScalar = {
    id?: boolean
    news_id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
  }

  export type NewsBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "news_id" | "title" | "content" | "order", ExtArgs["result"]["newsBlock"]>
  export type NewsBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    news_block_images?: boolean | NewsBlock$news_block_imagesArgs<ExtArgs>
    _count?: boolean | NewsBlockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type NewsBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }

  export type $NewsBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsBlock"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      news_block_images: Prisma.$NewsBlockImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      news_id: bigint
      title: string | null
      content: string | null
      order: bigint
    }, ExtArgs["result"]["newsBlock"]>
    composites: {}
  }

  type NewsBlockGetPayload<S extends boolean | null | undefined | NewsBlockDefaultArgs> = $Result.GetResult<Prisma.$NewsBlockPayload, S>

  type NewsBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsBlockCountAggregateInputType | true
    }

  export interface NewsBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsBlock'], meta: { name: 'NewsBlock' } }
    /**
     * Find zero or one NewsBlock that matches the filter.
     * @param {NewsBlockFindUniqueArgs} args - Arguments to find a NewsBlock
     * @example
     * // Get one NewsBlock
     * const newsBlock = await prisma.newsBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsBlockFindUniqueArgs>(args: SelectSubset<T, NewsBlockFindUniqueArgs<ExtArgs>>): Prisma__NewsBlockClient<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsBlockFindUniqueOrThrowArgs} args - Arguments to find a NewsBlock
     * @example
     * // Get one NewsBlock
     * const newsBlock = await prisma.newsBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsBlockClient<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockFindFirstArgs} args - Arguments to find a NewsBlock
     * @example
     * // Get one NewsBlock
     * const newsBlock = await prisma.newsBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsBlockFindFirstArgs>(args?: SelectSubset<T, NewsBlockFindFirstArgs<ExtArgs>>): Prisma__NewsBlockClient<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockFindFirstOrThrowArgs} args - Arguments to find a NewsBlock
     * @example
     * // Get one NewsBlock
     * const newsBlock = await prisma.newsBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsBlockClient<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsBlocks
     * const newsBlocks = await prisma.newsBlock.findMany()
     * 
     * // Get first 10 NewsBlocks
     * const newsBlocks = await prisma.newsBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsBlockWithIdOnly = await prisma.newsBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsBlockFindManyArgs>(args?: SelectSubset<T, NewsBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsBlock.
     * @param {NewsBlockCreateArgs} args - Arguments to create a NewsBlock.
     * @example
     * // Create one NewsBlock
     * const NewsBlock = await prisma.newsBlock.create({
     *   data: {
     *     // ... data to create a NewsBlock
     *   }
     * })
     * 
     */
    create<T extends NewsBlockCreateArgs>(args: SelectSubset<T, NewsBlockCreateArgs<ExtArgs>>): Prisma__NewsBlockClient<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsBlocks.
     * @param {NewsBlockCreateManyArgs} args - Arguments to create many NewsBlocks.
     * @example
     * // Create many NewsBlocks
     * const newsBlock = await prisma.newsBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsBlockCreateManyArgs>(args?: SelectSubset<T, NewsBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsBlocks and returns the data saved in the database.
     * @param {NewsBlockCreateManyAndReturnArgs} args - Arguments to create many NewsBlocks.
     * @example
     * // Create many NewsBlocks
     * const newsBlock = await prisma.newsBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsBlocks and only return the `id`
     * const newsBlockWithIdOnly = await prisma.newsBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsBlock.
     * @param {NewsBlockDeleteArgs} args - Arguments to delete one NewsBlock.
     * @example
     * // Delete one NewsBlock
     * const NewsBlock = await prisma.newsBlock.delete({
     *   where: {
     *     // ... filter to delete one NewsBlock
     *   }
     * })
     * 
     */
    delete<T extends NewsBlockDeleteArgs>(args: SelectSubset<T, NewsBlockDeleteArgs<ExtArgs>>): Prisma__NewsBlockClient<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsBlock.
     * @param {NewsBlockUpdateArgs} args - Arguments to update one NewsBlock.
     * @example
     * // Update one NewsBlock
     * const newsBlock = await prisma.newsBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsBlockUpdateArgs>(args: SelectSubset<T, NewsBlockUpdateArgs<ExtArgs>>): Prisma__NewsBlockClient<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsBlocks.
     * @param {NewsBlockDeleteManyArgs} args - Arguments to filter NewsBlocks to delete.
     * @example
     * // Delete a few NewsBlocks
     * const { count } = await prisma.newsBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsBlockDeleteManyArgs>(args?: SelectSubset<T, NewsBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsBlocks
     * const newsBlock = await prisma.newsBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsBlockUpdateManyArgs>(args: SelectSubset<T, NewsBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsBlocks and returns the data updated in the database.
     * @param {NewsBlockUpdateManyAndReturnArgs} args - Arguments to update many NewsBlocks.
     * @example
     * // Update many NewsBlocks
     * const newsBlock = await prisma.newsBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsBlocks and only return the `id`
     * const newsBlockWithIdOnly = await prisma.newsBlock.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsBlock.
     * @param {NewsBlockUpsertArgs} args - Arguments to update or create a NewsBlock.
     * @example
     * // Update or create a NewsBlock
     * const newsBlock = await prisma.newsBlock.upsert({
     *   create: {
     *     // ... data to create a NewsBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsBlock we want to update
     *   }
     * })
     */
    upsert<T extends NewsBlockUpsertArgs>(args: SelectSubset<T, NewsBlockUpsertArgs<ExtArgs>>): Prisma__NewsBlockClient<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockCountArgs} args - Arguments to filter NewsBlocks to count.
     * @example
     * // Count the number of NewsBlocks
     * const count = await prisma.newsBlock.count({
     *   where: {
     *     // ... the filter for the NewsBlocks we want to count
     *   }
     * })
    **/
    count<T extends NewsBlockCountArgs>(
      args?: Subset<T, NewsBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsBlockAggregateArgs>(args: Subset<T, NewsBlockAggregateArgs>): Prisma.PrismaPromise<GetNewsBlockAggregateType<T>>

    /**
     * Group by NewsBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockGroupByArgs} args - Group by arguments.
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
      T extends NewsBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsBlockGroupByArgs['orderBy'] }
        : { orderBy?: NewsBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsBlock model
   */
  readonly fields: NewsBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    news_block_images<T extends NewsBlock$news_block_imagesArgs<ExtArgs> = {}>(args?: Subset<T, NewsBlock$news_block_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NewsBlock model
   */
  interface NewsBlockFieldRefs {
    readonly id: FieldRef<"NewsBlock", 'BigInt'>
    readonly news_id: FieldRef<"NewsBlock", 'BigInt'>
    readonly title: FieldRef<"NewsBlock", 'String'>
    readonly content: FieldRef<"NewsBlock", 'String'>
    readonly order: FieldRef<"NewsBlock", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * NewsBlock findUnique
   */
  export type NewsBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlock to fetch.
     */
    where: NewsBlockWhereUniqueInput
  }

  /**
   * NewsBlock findUniqueOrThrow
   */
  export type NewsBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlock to fetch.
     */
    where: NewsBlockWhereUniqueInput
  }

  /**
   * NewsBlock findFirst
   */
  export type NewsBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlock to fetch.
     */
    where?: NewsBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlocks to fetch.
     */
    orderBy?: NewsBlockOrderByWithRelationInput | NewsBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsBlocks.
     */
    cursor?: NewsBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsBlocks.
     */
    distinct?: NewsBlockScalarFieldEnum | NewsBlockScalarFieldEnum[]
  }

  /**
   * NewsBlock findFirstOrThrow
   */
  export type NewsBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlock to fetch.
     */
    where?: NewsBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlocks to fetch.
     */
    orderBy?: NewsBlockOrderByWithRelationInput | NewsBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsBlocks.
     */
    cursor?: NewsBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsBlocks.
     */
    distinct?: NewsBlockScalarFieldEnum | NewsBlockScalarFieldEnum[]
  }

  /**
   * NewsBlock findMany
   */
  export type NewsBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlocks to fetch.
     */
    where?: NewsBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlocks to fetch.
     */
    orderBy?: NewsBlockOrderByWithRelationInput | NewsBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsBlocks.
     */
    cursor?: NewsBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlocks.
     */
    skip?: number
    distinct?: NewsBlockScalarFieldEnum | NewsBlockScalarFieldEnum[]
  }

  /**
   * NewsBlock create
   */
  export type NewsBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsBlock.
     */
    data: XOR<NewsBlockCreateInput, NewsBlockUncheckedCreateInput>
  }

  /**
   * NewsBlock createMany
   */
  export type NewsBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsBlocks.
     */
    data: NewsBlockCreateManyInput | NewsBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsBlock createManyAndReturn
   */
  export type NewsBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * The data used to create many NewsBlocks.
     */
    data: NewsBlockCreateManyInput | NewsBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsBlock update
   */
  export type NewsBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsBlock.
     */
    data: XOR<NewsBlockUpdateInput, NewsBlockUncheckedUpdateInput>
    /**
     * Choose, which NewsBlock to update.
     */
    where: NewsBlockWhereUniqueInput
  }

  /**
   * NewsBlock updateMany
   */
  export type NewsBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsBlocks.
     */
    data: XOR<NewsBlockUpdateManyMutationInput, NewsBlockUncheckedUpdateManyInput>
    /**
     * Filter which NewsBlocks to update
     */
    where?: NewsBlockWhereInput
    /**
     * Limit how many NewsBlocks to update.
     */
    limit?: number
  }

  /**
   * NewsBlock updateManyAndReturn
   */
  export type NewsBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * The data used to update NewsBlocks.
     */
    data: XOR<NewsBlockUpdateManyMutationInput, NewsBlockUncheckedUpdateManyInput>
    /**
     * Filter which NewsBlocks to update
     */
    where?: NewsBlockWhereInput
    /**
     * Limit how many NewsBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsBlock upsert
   */
  export type NewsBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsBlock to update in case it exists.
     */
    where: NewsBlockWhereUniqueInput
    /**
     * In case the NewsBlock found by the `where` argument doesn't exist, create a new NewsBlock with this data.
     */
    create: XOR<NewsBlockCreateInput, NewsBlockUncheckedCreateInput>
    /**
     * In case the NewsBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsBlockUpdateInput, NewsBlockUncheckedUpdateInput>
  }

  /**
   * NewsBlock delete
   */
  export type NewsBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
    /**
     * Filter which NewsBlock to delete.
     */
    where: NewsBlockWhereUniqueInput
  }

  /**
   * NewsBlock deleteMany
   */
  export type NewsBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsBlocks to delete
     */
    where?: NewsBlockWhereInput
    /**
     * Limit how many NewsBlocks to delete.
     */
    limit?: number
  }

  /**
   * NewsBlock.news_block_images
   */
  export type NewsBlock$news_block_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    where?: NewsBlockImageWhereInput
    orderBy?: NewsBlockImageOrderByWithRelationInput | NewsBlockImageOrderByWithRelationInput[]
    cursor?: NewsBlockImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsBlockImageScalarFieldEnum | NewsBlockImageScalarFieldEnum[]
  }

  /**
   * NewsBlock without action
   */
  export type NewsBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlock
     */
    select?: NewsBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlock
     */
    omit?: NewsBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockInclude<ExtArgs> | null
  }


  /**
   * Model NewsBlockImage
   */

  export type AggregateNewsBlockImage = {
    _count: NewsBlockImageCountAggregateOutputType | null
    _avg: NewsBlockImageAvgAggregateOutputType | null
    _sum: NewsBlockImageSumAggregateOutputType | null
    _min: NewsBlockImageMinAggregateOutputType | null
    _max: NewsBlockImageMaxAggregateOutputType | null
  }

  export type NewsBlockImageAvgAggregateOutputType = {
    id: number | null
    news_block_id: number | null
    image_id: number | null
    order: number | null
  }

  export type NewsBlockImageSumAggregateOutputType = {
    id: bigint | null
    news_block_id: bigint | null
    image_id: bigint | null
    order: bigint | null
  }

  export type NewsBlockImageMinAggregateOutputType = {
    id: bigint | null
    news_block_id: bigint | null
    image_id: bigint | null
    order: bigint | null
  }

  export type NewsBlockImageMaxAggregateOutputType = {
    id: bigint | null
    news_block_id: bigint | null
    image_id: bigint | null
    order: bigint | null
  }

  export type NewsBlockImageCountAggregateOutputType = {
    id: number
    news_block_id: number
    image_id: number
    order: number
    _all: number
  }


  export type NewsBlockImageAvgAggregateInputType = {
    id?: true
    news_block_id?: true
    image_id?: true
    order?: true
  }

  export type NewsBlockImageSumAggregateInputType = {
    id?: true
    news_block_id?: true
    image_id?: true
    order?: true
  }

  export type NewsBlockImageMinAggregateInputType = {
    id?: true
    news_block_id?: true
    image_id?: true
    order?: true
  }

  export type NewsBlockImageMaxAggregateInputType = {
    id?: true
    news_block_id?: true
    image_id?: true
    order?: true
  }

  export type NewsBlockImageCountAggregateInputType = {
    id?: true
    news_block_id?: true
    image_id?: true
    order?: true
    _all?: true
  }

  export type NewsBlockImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsBlockImage to aggregate.
     */
    where?: NewsBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlockImages to fetch.
     */
    orderBy?: NewsBlockImageOrderByWithRelationInput | NewsBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlockImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsBlockImages
    **/
    _count?: true | NewsBlockImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsBlockImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsBlockImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsBlockImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsBlockImageMaxAggregateInputType
  }

  export type GetNewsBlockImageAggregateType<T extends NewsBlockImageAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsBlockImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsBlockImage[P]>
      : GetScalarType<T[P], AggregateNewsBlockImage[P]>
  }




  export type NewsBlockImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsBlockImageWhereInput
    orderBy?: NewsBlockImageOrderByWithAggregationInput | NewsBlockImageOrderByWithAggregationInput[]
    by: NewsBlockImageScalarFieldEnum[] | NewsBlockImageScalarFieldEnum
    having?: NewsBlockImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsBlockImageCountAggregateInputType | true
    _avg?: NewsBlockImageAvgAggregateInputType
    _sum?: NewsBlockImageSumAggregateInputType
    _min?: NewsBlockImageMinAggregateInputType
    _max?: NewsBlockImageMaxAggregateInputType
  }

  export type NewsBlockImageGroupByOutputType = {
    id: bigint
    news_block_id: bigint
    image_id: bigint
    order: bigint
    _count: NewsBlockImageCountAggregateOutputType | null
    _avg: NewsBlockImageAvgAggregateOutputType | null
    _sum: NewsBlockImageSumAggregateOutputType | null
    _min: NewsBlockImageMinAggregateOutputType | null
    _max: NewsBlockImageMaxAggregateOutputType | null
  }

  type GetNewsBlockImageGroupByPayload<T extends NewsBlockImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsBlockImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsBlockImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsBlockImageGroupByOutputType[P]>
            : GetScalarType<T[P], NewsBlockImageGroupByOutputType[P]>
        }
      >
    >


  export type NewsBlockImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    news_block_id?: boolean
    image_id?: boolean
    order?: boolean
    news_block?: boolean | NewsBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsBlockImage"]>

  export type NewsBlockImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    news_block_id?: boolean
    image_id?: boolean
    order?: boolean
    news_block?: boolean | NewsBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsBlockImage"]>

  export type NewsBlockImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    news_block_id?: boolean
    image_id?: boolean
    order?: boolean
    news_block?: boolean | NewsBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsBlockImage"]>

  export type NewsBlockImageSelectScalar = {
    id?: boolean
    news_block_id?: boolean
    image_id?: boolean
    order?: boolean
  }

  export type NewsBlockImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "news_block_id" | "image_id" | "order", ExtArgs["result"]["newsBlockImage"]>
  export type NewsBlockImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_block?: boolean | NewsBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type NewsBlockImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_block?: boolean | NewsBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type NewsBlockImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_block?: boolean | NewsBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $NewsBlockImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsBlockImage"
    objects: {
      news_block: Prisma.$NewsBlockPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      news_block_id: bigint
      image_id: bigint
      order: bigint
    }, ExtArgs["result"]["newsBlockImage"]>
    composites: {}
  }

  type NewsBlockImageGetPayload<S extends boolean | null | undefined | NewsBlockImageDefaultArgs> = $Result.GetResult<Prisma.$NewsBlockImagePayload, S>

  type NewsBlockImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsBlockImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsBlockImageCountAggregateInputType | true
    }

  export interface NewsBlockImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsBlockImage'], meta: { name: 'NewsBlockImage' } }
    /**
     * Find zero or one NewsBlockImage that matches the filter.
     * @param {NewsBlockImageFindUniqueArgs} args - Arguments to find a NewsBlockImage
     * @example
     * // Get one NewsBlockImage
     * const newsBlockImage = await prisma.newsBlockImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsBlockImageFindUniqueArgs>(args: SelectSubset<T, NewsBlockImageFindUniqueArgs<ExtArgs>>): Prisma__NewsBlockImageClient<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsBlockImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsBlockImageFindUniqueOrThrowArgs} args - Arguments to find a NewsBlockImage
     * @example
     * // Get one NewsBlockImage
     * const newsBlockImage = await prisma.newsBlockImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsBlockImageFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsBlockImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsBlockImageClient<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsBlockImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockImageFindFirstArgs} args - Arguments to find a NewsBlockImage
     * @example
     * // Get one NewsBlockImage
     * const newsBlockImage = await prisma.newsBlockImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsBlockImageFindFirstArgs>(args?: SelectSubset<T, NewsBlockImageFindFirstArgs<ExtArgs>>): Prisma__NewsBlockImageClient<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsBlockImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockImageFindFirstOrThrowArgs} args - Arguments to find a NewsBlockImage
     * @example
     * // Get one NewsBlockImage
     * const newsBlockImage = await prisma.newsBlockImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsBlockImageFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsBlockImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsBlockImageClient<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsBlockImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsBlockImages
     * const newsBlockImages = await prisma.newsBlockImage.findMany()
     * 
     * // Get first 10 NewsBlockImages
     * const newsBlockImages = await prisma.newsBlockImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsBlockImageWithIdOnly = await prisma.newsBlockImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsBlockImageFindManyArgs>(args?: SelectSubset<T, NewsBlockImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsBlockImage.
     * @param {NewsBlockImageCreateArgs} args - Arguments to create a NewsBlockImage.
     * @example
     * // Create one NewsBlockImage
     * const NewsBlockImage = await prisma.newsBlockImage.create({
     *   data: {
     *     // ... data to create a NewsBlockImage
     *   }
     * })
     * 
     */
    create<T extends NewsBlockImageCreateArgs>(args: SelectSubset<T, NewsBlockImageCreateArgs<ExtArgs>>): Prisma__NewsBlockImageClient<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsBlockImages.
     * @param {NewsBlockImageCreateManyArgs} args - Arguments to create many NewsBlockImages.
     * @example
     * // Create many NewsBlockImages
     * const newsBlockImage = await prisma.newsBlockImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsBlockImageCreateManyArgs>(args?: SelectSubset<T, NewsBlockImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsBlockImages and returns the data saved in the database.
     * @param {NewsBlockImageCreateManyAndReturnArgs} args - Arguments to create many NewsBlockImages.
     * @example
     * // Create many NewsBlockImages
     * const newsBlockImage = await prisma.newsBlockImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsBlockImages and only return the `id`
     * const newsBlockImageWithIdOnly = await prisma.newsBlockImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsBlockImageCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsBlockImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsBlockImage.
     * @param {NewsBlockImageDeleteArgs} args - Arguments to delete one NewsBlockImage.
     * @example
     * // Delete one NewsBlockImage
     * const NewsBlockImage = await prisma.newsBlockImage.delete({
     *   where: {
     *     // ... filter to delete one NewsBlockImage
     *   }
     * })
     * 
     */
    delete<T extends NewsBlockImageDeleteArgs>(args: SelectSubset<T, NewsBlockImageDeleteArgs<ExtArgs>>): Prisma__NewsBlockImageClient<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsBlockImage.
     * @param {NewsBlockImageUpdateArgs} args - Arguments to update one NewsBlockImage.
     * @example
     * // Update one NewsBlockImage
     * const newsBlockImage = await prisma.newsBlockImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsBlockImageUpdateArgs>(args: SelectSubset<T, NewsBlockImageUpdateArgs<ExtArgs>>): Prisma__NewsBlockImageClient<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsBlockImages.
     * @param {NewsBlockImageDeleteManyArgs} args - Arguments to filter NewsBlockImages to delete.
     * @example
     * // Delete a few NewsBlockImages
     * const { count } = await prisma.newsBlockImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsBlockImageDeleteManyArgs>(args?: SelectSubset<T, NewsBlockImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsBlockImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsBlockImages
     * const newsBlockImage = await prisma.newsBlockImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsBlockImageUpdateManyArgs>(args: SelectSubset<T, NewsBlockImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsBlockImages and returns the data updated in the database.
     * @param {NewsBlockImageUpdateManyAndReturnArgs} args - Arguments to update many NewsBlockImages.
     * @example
     * // Update many NewsBlockImages
     * const newsBlockImage = await prisma.newsBlockImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsBlockImages and only return the `id`
     * const newsBlockImageWithIdOnly = await prisma.newsBlockImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsBlockImageUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsBlockImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsBlockImage.
     * @param {NewsBlockImageUpsertArgs} args - Arguments to update or create a NewsBlockImage.
     * @example
     * // Update or create a NewsBlockImage
     * const newsBlockImage = await prisma.newsBlockImage.upsert({
     *   create: {
     *     // ... data to create a NewsBlockImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsBlockImage we want to update
     *   }
     * })
     */
    upsert<T extends NewsBlockImageUpsertArgs>(args: SelectSubset<T, NewsBlockImageUpsertArgs<ExtArgs>>): Prisma__NewsBlockImageClient<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsBlockImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockImageCountArgs} args - Arguments to filter NewsBlockImages to count.
     * @example
     * // Count the number of NewsBlockImages
     * const count = await prisma.newsBlockImage.count({
     *   where: {
     *     // ... the filter for the NewsBlockImages we want to count
     *   }
     * })
    **/
    count<T extends NewsBlockImageCountArgs>(
      args?: Subset<T, NewsBlockImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsBlockImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsBlockImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsBlockImageAggregateArgs>(args: Subset<T, NewsBlockImageAggregateArgs>): Prisma.PrismaPromise<GetNewsBlockImageAggregateType<T>>

    /**
     * Group by NewsBlockImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlockImageGroupByArgs} args - Group by arguments.
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
      T extends NewsBlockImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsBlockImageGroupByArgs['orderBy'] }
        : { orderBy?: NewsBlockImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsBlockImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsBlockImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsBlockImage model
   */
  readonly fields: NewsBlockImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsBlockImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsBlockImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news_block<T extends NewsBlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsBlockDefaultArgs<ExtArgs>>): Prisma__NewsBlockClient<$Result.GetResult<Prisma.$NewsBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewsBlockImage model
   */
  interface NewsBlockImageFieldRefs {
    readonly id: FieldRef<"NewsBlockImage", 'BigInt'>
    readonly news_block_id: FieldRef<"NewsBlockImage", 'BigInt'>
    readonly image_id: FieldRef<"NewsBlockImage", 'BigInt'>
    readonly order: FieldRef<"NewsBlockImage", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * NewsBlockImage findUnique
   */
  export type NewsBlockImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlockImage to fetch.
     */
    where: NewsBlockImageWhereUniqueInput
  }

  /**
   * NewsBlockImage findUniqueOrThrow
   */
  export type NewsBlockImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlockImage to fetch.
     */
    where: NewsBlockImageWhereUniqueInput
  }

  /**
   * NewsBlockImage findFirst
   */
  export type NewsBlockImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlockImage to fetch.
     */
    where?: NewsBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlockImages to fetch.
     */
    orderBy?: NewsBlockImageOrderByWithRelationInput | NewsBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsBlockImages.
     */
    cursor?: NewsBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlockImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsBlockImages.
     */
    distinct?: NewsBlockImageScalarFieldEnum | NewsBlockImageScalarFieldEnum[]
  }

  /**
   * NewsBlockImage findFirstOrThrow
   */
  export type NewsBlockImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlockImage to fetch.
     */
    where?: NewsBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlockImages to fetch.
     */
    orderBy?: NewsBlockImageOrderByWithRelationInput | NewsBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsBlockImages.
     */
    cursor?: NewsBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlockImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsBlockImages.
     */
    distinct?: NewsBlockImageScalarFieldEnum | NewsBlockImageScalarFieldEnum[]
  }

  /**
   * NewsBlockImage findMany
   */
  export type NewsBlockImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which NewsBlockImages to fetch.
     */
    where?: NewsBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlockImages to fetch.
     */
    orderBy?: NewsBlockImageOrderByWithRelationInput | NewsBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsBlockImages.
     */
    cursor?: NewsBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlockImages.
     */
    skip?: number
    distinct?: NewsBlockImageScalarFieldEnum | NewsBlockImageScalarFieldEnum[]
  }

  /**
   * NewsBlockImage create
   */
  export type NewsBlockImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsBlockImage.
     */
    data: XOR<NewsBlockImageCreateInput, NewsBlockImageUncheckedCreateInput>
  }

  /**
   * NewsBlockImage createMany
   */
  export type NewsBlockImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsBlockImages.
     */
    data: NewsBlockImageCreateManyInput | NewsBlockImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsBlockImage createManyAndReturn
   */
  export type NewsBlockImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * The data used to create many NewsBlockImages.
     */
    data: NewsBlockImageCreateManyInput | NewsBlockImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsBlockImage update
   */
  export type NewsBlockImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsBlockImage.
     */
    data: XOR<NewsBlockImageUpdateInput, NewsBlockImageUncheckedUpdateInput>
    /**
     * Choose, which NewsBlockImage to update.
     */
    where: NewsBlockImageWhereUniqueInput
  }

  /**
   * NewsBlockImage updateMany
   */
  export type NewsBlockImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsBlockImages.
     */
    data: XOR<NewsBlockImageUpdateManyMutationInput, NewsBlockImageUncheckedUpdateManyInput>
    /**
     * Filter which NewsBlockImages to update
     */
    where?: NewsBlockImageWhereInput
    /**
     * Limit how many NewsBlockImages to update.
     */
    limit?: number
  }

  /**
   * NewsBlockImage updateManyAndReturn
   */
  export type NewsBlockImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * The data used to update NewsBlockImages.
     */
    data: XOR<NewsBlockImageUpdateManyMutationInput, NewsBlockImageUncheckedUpdateManyInput>
    /**
     * Filter which NewsBlockImages to update
     */
    where?: NewsBlockImageWhereInput
    /**
     * Limit how many NewsBlockImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsBlockImage upsert
   */
  export type NewsBlockImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsBlockImage to update in case it exists.
     */
    where: NewsBlockImageWhereUniqueInput
    /**
     * In case the NewsBlockImage found by the `where` argument doesn't exist, create a new NewsBlockImage with this data.
     */
    create: XOR<NewsBlockImageCreateInput, NewsBlockImageUncheckedCreateInput>
    /**
     * In case the NewsBlockImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsBlockImageUpdateInput, NewsBlockImageUncheckedUpdateInput>
  }

  /**
   * NewsBlockImage delete
   */
  export type NewsBlockImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    /**
     * Filter which NewsBlockImage to delete.
     */
    where: NewsBlockImageWhereUniqueInput
  }

  /**
   * NewsBlockImage deleteMany
   */
  export type NewsBlockImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsBlockImages to delete
     */
    where?: NewsBlockImageWhereInput
    /**
     * Limit how many NewsBlockImages to delete.
     */
    limit?: number
  }

  /**
   * NewsBlockImage without action
   */
  export type NewsBlockImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: bigint | null
  }

  export type ImageMinAggregateOutputType = {
    id: bigint | null
    url: string | null
    alt: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: bigint | null
    url: string | null
    alt: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    alt: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: bigint
    url: string
    alt: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    NewsBlockImages?: boolean | Image$NewsBlockImagesArgs<ExtArgs>
    SermonsBlockImages?: boolean | Image$SermonsBlockImagesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    alt?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "alt" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NewsBlockImages?: boolean | Image$NewsBlockImagesArgs<ExtArgs>
    SermonsBlockImages?: boolean | Image$SermonsBlockImagesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      NewsBlockImages: Prisma.$NewsBlockImagePayload<ExtArgs>[]
      SermonsBlockImages: Prisma.$SermonBlockImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      url: string
      alt: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NewsBlockImages<T extends Image$NewsBlockImagesArgs<ExtArgs> = {}>(args?: Subset<T, Image$NewsBlockImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlockImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SermonsBlockImages<T extends Image$SermonsBlockImagesArgs<ExtArgs> = {}>(args?: Subset<T, Image$SermonsBlockImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'BigInt'>
    readonly url: FieldRef<"Image", 'String'>
    readonly alt: FieldRef<"Image", 'String'>
    readonly created_at: FieldRef<"Image", 'DateTime'>
    readonly updated_at: FieldRef<"Image", 'DateTime'>
    readonly deleted_at: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.NewsBlockImages
   */
  export type Image$NewsBlockImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlockImage
     */
    select?: NewsBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsBlockImage
     */
    omit?: NewsBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsBlockImageInclude<ExtArgs> | null
    where?: NewsBlockImageWhereInput
    orderBy?: NewsBlockImageOrderByWithRelationInput | NewsBlockImageOrderByWithRelationInput[]
    cursor?: NewsBlockImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsBlockImageScalarFieldEnum | NewsBlockImageScalarFieldEnum[]
  }

  /**
   * Image.SermonsBlockImages
   */
  export type Image$SermonsBlockImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    where?: SermonBlockImageWhereInput
    orderBy?: SermonBlockImageOrderByWithRelationInput | SermonBlockImageOrderByWithRelationInput[]
    cursor?: SermonBlockImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SermonBlockImageScalarFieldEnum | SermonBlockImageScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Sermon
   */

  export type AggregateSermon = {
    _count: SermonCountAggregateOutputType | null
    _avg: SermonAvgAggregateOutputType | null
    _sum: SermonSumAggregateOutputType | null
    _min: SermonMinAggregateOutputType | null
    _max: SermonMaxAggregateOutputType | null
  }

  export type SermonAvgAggregateOutputType = {
    id: number | null
  }

  export type SermonSumAggregateOutputType = {
    id: bigint | null
  }

  export type SermonMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    preacher_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type SermonMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    preacher_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type SermonCountAggregateOutputType = {
    id: number
    title: number
    preacher_name: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type SermonAvgAggregateInputType = {
    id?: true
  }

  export type SermonSumAggregateInputType = {
    id?: true
  }

  export type SermonMinAggregateInputType = {
    id?: true
    title?: true
    preacher_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type SermonMaxAggregateInputType = {
    id?: true
    title?: true
    preacher_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type SermonCountAggregateInputType = {
    id?: true
    title?: true
    preacher_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type SermonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sermon to aggregate.
     */
    where?: SermonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sermons to fetch.
     */
    orderBy?: SermonOrderByWithRelationInput | SermonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SermonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sermons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sermons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sermons
    **/
    _count?: true | SermonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SermonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SermonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SermonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SermonMaxAggregateInputType
  }

  export type GetSermonAggregateType<T extends SermonAggregateArgs> = {
        [P in keyof T & keyof AggregateSermon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSermon[P]>
      : GetScalarType<T[P], AggregateSermon[P]>
  }




  export type SermonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SermonWhereInput
    orderBy?: SermonOrderByWithAggregationInput | SermonOrderByWithAggregationInput[]
    by: SermonScalarFieldEnum[] | SermonScalarFieldEnum
    having?: SermonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SermonCountAggregateInputType | true
    _avg?: SermonAvgAggregateInputType
    _sum?: SermonSumAggregateInputType
    _min?: SermonMinAggregateInputType
    _max?: SermonMaxAggregateInputType
  }

  export type SermonGroupByOutputType = {
    id: bigint
    title: string | null
    preacher_name: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: SermonCountAggregateOutputType | null
    _avg: SermonAvgAggregateOutputType | null
    _sum: SermonSumAggregateOutputType | null
    _min: SermonMinAggregateOutputType | null
    _max: SermonMaxAggregateOutputType | null
  }

  type GetSermonGroupByPayload<T extends SermonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SermonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SermonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SermonGroupByOutputType[P]>
            : GetScalarType<T[P], SermonGroupByOutputType[P]>
        }
      >
    >


  export type SermonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    preacher_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    sermon_blocks?: boolean | Sermon$sermon_blocksArgs<ExtArgs>
    _count?: boolean | SermonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sermon"]>

  export type SermonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    preacher_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["sermon"]>

  export type SermonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    preacher_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["sermon"]>

  export type SermonSelectScalar = {
    id?: boolean
    title?: boolean
    preacher_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type SermonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "preacher_name" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["sermon"]>
  export type SermonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon_blocks?: boolean | Sermon$sermon_blocksArgs<ExtArgs>
    _count?: boolean | SermonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SermonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SermonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SermonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sermon"
    objects: {
      sermon_blocks: Prisma.$SermonBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string | null
      preacher_name: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["sermon"]>
    composites: {}
  }

  type SermonGetPayload<S extends boolean | null | undefined | SermonDefaultArgs> = $Result.GetResult<Prisma.$SermonPayload, S>

  type SermonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SermonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SermonCountAggregateInputType | true
    }

  export interface SermonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sermon'], meta: { name: 'Sermon' } }
    /**
     * Find zero or one Sermon that matches the filter.
     * @param {SermonFindUniqueArgs} args - Arguments to find a Sermon
     * @example
     * // Get one Sermon
     * const sermon = await prisma.sermon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SermonFindUniqueArgs>(args: SelectSubset<T, SermonFindUniqueArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sermon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SermonFindUniqueOrThrowArgs} args - Arguments to find a Sermon
     * @example
     * // Get one Sermon
     * const sermon = await prisma.sermon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SermonFindUniqueOrThrowArgs>(args: SelectSubset<T, SermonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sermon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonFindFirstArgs} args - Arguments to find a Sermon
     * @example
     * // Get one Sermon
     * const sermon = await prisma.sermon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SermonFindFirstArgs>(args?: SelectSubset<T, SermonFindFirstArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sermon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonFindFirstOrThrowArgs} args - Arguments to find a Sermon
     * @example
     * // Get one Sermon
     * const sermon = await prisma.sermon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SermonFindFirstOrThrowArgs>(args?: SelectSubset<T, SermonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sermons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sermons
     * const sermons = await prisma.sermon.findMany()
     * 
     * // Get first 10 Sermons
     * const sermons = await prisma.sermon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sermonWithIdOnly = await prisma.sermon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SermonFindManyArgs>(args?: SelectSubset<T, SermonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sermon.
     * @param {SermonCreateArgs} args - Arguments to create a Sermon.
     * @example
     * // Create one Sermon
     * const Sermon = await prisma.sermon.create({
     *   data: {
     *     // ... data to create a Sermon
     *   }
     * })
     * 
     */
    create<T extends SermonCreateArgs>(args: SelectSubset<T, SermonCreateArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sermons.
     * @param {SermonCreateManyArgs} args - Arguments to create many Sermons.
     * @example
     * // Create many Sermons
     * const sermon = await prisma.sermon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SermonCreateManyArgs>(args?: SelectSubset<T, SermonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sermons and returns the data saved in the database.
     * @param {SermonCreateManyAndReturnArgs} args - Arguments to create many Sermons.
     * @example
     * // Create many Sermons
     * const sermon = await prisma.sermon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sermons and only return the `id`
     * const sermonWithIdOnly = await prisma.sermon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SermonCreateManyAndReturnArgs>(args?: SelectSubset<T, SermonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sermon.
     * @param {SermonDeleteArgs} args - Arguments to delete one Sermon.
     * @example
     * // Delete one Sermon
     * const Sermon = await prisma.sermon.delete({
     *   where: {
     *     // ... filter to delete one Sermon
     *   }
     * })
     * 
     */
    delete<T extends SermonDeleteArgs>(args: SelectSubset<T, SermonDeleteArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sermon.
     * @param {SermonUpdateArgs} args - Arguments to update one Sermon.
     * @example
     * // Update one Sermon
     * const sermon = await prisma.sermon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SermonUpdateArgs>(args: SelectSubset<T, SermonUpdateArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sermons.
     * @param {SermonDeleteManyArgs} args - Arguments to filter Sermons to delete.
     * @example
     * // Delete a few Sermons
     * const { count } = await prisma.sermon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SermonDeleteManyArgs>(args?: SelectSubset<T, SermonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sermons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sermons
     * const sermon = await prisma.sermon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SermonUpdateManyArgs>(args: SelectSubset<T, SermonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sermons and returns the data updated in the database.
     * @param {SermonUpdateManyAndReturnArgs} args - Arguments to update many Sermons.
     * @example
     * // Update many Sermons
     * const sermon = await prisma.sermon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sermons and only return the `id`
     * const sermonWithIdOnly = await prisma.sermon.updateManyAndReturn({
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
    updateManyAndReturn<T extends SermonUpdateManyAndReturnArgs>(args: SelectSubset<T, SermonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sermon.
     * @param {SermonUpsertArgs} args - Arguments to update or create a Sermon.
     * @example
     * // Update or create a Sermon
     * const sermon = await prisma.sermon.upsert({
     *   create: {
     *     // ... data to create a Sermon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sermon we want to update
     *   }
     * })
     */
    upsert<T extends SermonUpsertArgs>(args: SelectSubset<T, SermonUpsertArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sermons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonCountArgs} args - Arguments to filter Sermons to count.
     * @example
     * // Count the number of Sermons
     * const count = await prisma.sermon.count({
     *   where: {
     *     // ... the filter for the Sermons we want to count
     *   }
     * })
    **/
    count<T extends SermonCountArgs>(
      args?: Subset<T, SermonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SermonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sermon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SermonAggregateArgs>(args: Subset<T, SermonAggregateArgs>): Prisma.PrismaPromise<GetSermonAggregateType<T>>

    /**
     * Group by Sermon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonGroupByArgs} args - Group by arguments.
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
      T extends SermonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SermonGroupByArgs['orderBy'] }
        : { orderBy?: SermonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SermonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSermonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sermon model
   */
  readonly fields: SermonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sermon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SermonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sermon_blocks<T extends Sermon$sermon_blocksArgs<ExtArgs> = {}>(args?: Subset<T, Sermon$sermon_blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sermon model
   */
  interface SermonFieldRefs {
    readonly id: FieldRef<"Sermon", 'BigInt'>
    readonly title: FieldRef<"Sermon", 'String'>
    readonly preacher_name: FieldRef<"Sermon", 'String'>
    readonly created_at: FieldRef<"Sermon", 'DateTime'>
    readonly updated_at: FieldRef<"Sermon", 'DateTime'>
    readonly deleted_at: FieldRef<"Sermon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sermon findUnique
   */
  export type SermonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermon to fetch.
     */
    where: SermonWhereUniqueInput
  }

  /**
   * Sermon findUniqueOrThrow
   */
  export type SermonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermon to fetch.
     */
    where: SermonWhereUniqueInput
  }

  /**
   * Sermon findFirst
   */
  export type SermonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermon to fetch.
     */
    where?: SermonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sermons to fetch.
     */
    orderBy?: SermonOrderByWithRelationInput | SermonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sermons.
     */
    cursor?: SermonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sermons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sermons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sermons.
     */
    distinct?: SermonScalarFieldEnum | SermonScalarFieldEnum[]
  }

  /**
   * Sermon findFirstOrThrow
   */
  export type SermonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermon to fetch.
     */
    where?: SermonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sermons to fetch.
     */
    orderBy?: SermonOrderByWithRelationInput | SermonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sermons.
     */
    cursor?: SermonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sermons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sermons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sermons.
     */
    distinct?: SermonScalarFieldEnum | SermonScalarFieldEnum[]
  }

  /**
   * Sermon findMany
   */
  export type SermonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermons to fetch.
     */
    where?: SermonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sermons to fetch.
     */
    orderBy?: SermonOrderByWithRelationInput | SermonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sermons.
     */
    cursor?: SermonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sermons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sermons.
     */
    skip?: number
    distinct?: SermonScalarFieldEnum | SermonScalarFieldEnum[]
  }

  /**
   * Sermon create
   */
  export type SermonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * The data needed to create a Sermon.
     */
    data: XOR<SermonCreateInput, SermonUncheckedCreateInput>
  }

  /**
   * Sermon createMany
   */
  export type SermonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sermons.
     */
    data: SermonCreateManyInput | SermonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sermon createManyAndReturn
   */
  export type SermonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * The data used to create many Sermons.
     */
    data: SermonCreateManyInput | SermonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sermon update
   */
  export type SermonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * The data needed to update a Sermon.
     */
    data: XOR<SermonUpdateInput, SermonUncheckedUpdateInput>
    /**
     * Choose, which Sermon to update.
     */
    where: SermonWhereUniqueInput
  }

  /**
   * Sermon updateMany
   */
  export type SermonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sermons.
     */
    data: XOR<SermonUpdateManyMutationInput, SermonUncheckedUpdateManyInput>
    /**
     * Filter which Sermons to update
     */
    where?: SermonWhereInput
    /**
     * Limit how many Sermons to update.
     */
    limit?: number
  }

  /**
   * Sermon updateManyAndReturn
   */
  export type SermonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * The data used to update Sermons.
     */
    data: XOR<SermonUpdateManyMutationInput, SermonUncheckedUpdateManyInput>
    /**
     * Filter which Sermons to update
     */
    where?: SermonWhereInput
    /**
     * Limit how many Sermons to update.
     */
    limit?: number
  }

  /**
   * Sermon upsert
   */
  export type SermonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * The filter to search for the Sermon to update in case it exists.
     */
    where: SermonWhereUniqueInput
    /**
     * In case the Sermon found by the `where` argument doesn't exist, create a new Sermon with this data.
     */
    create: XOR<SermonCreateInput, SermonUncheckedCreateInput>
    /**
     * In case the Sermon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SermonUpdateInput, SermonUncheckedUpdateInput>
  }

  /**
   * Sermon delete
   */
  export type SermonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter which Sermon to delete.
     */
    where: SermonWhereUniqueInput
  }

  /**
   * Sermon deleteMany
   */
  export type SermonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sermons to delete
     */
    where?: SermonWhereInput
    /**
     * Limit how many Sermons to delete.
     */
    limit?: number
  }

  /**
   * Sermon.sermon_blocks
   */
  export type Sermon$sermon_blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    where?: SermonBlockWhereInput
    orderBy?: SermonBlockOrderByWithRelationInput | SermonBlockOrderByWithRelationInput[]
    cursor?: SermonBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SermonBlockScalarFieldEnum | SermonBlockScalarFieldEnum[]
  }

  /**
   * Sermon without action
   */
  export type SermonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
  }


  /**
   * Model SermonBlock
   */

  export type AggregateSermonBlock = {
    _count: SermonBlockCountAggregateOutputType | null
    _avg: SermonBlockAvgAggregateOutputType | null
    _sum: SermonBlockSumAggregateOutputType | null
    _min: SermonBlockMinAggregateOutputType | null
    _max: SermonBlockMaxAggregateOutputType | null
  }

  export type SermonBlockAvgAggregateOutputType = {
    id: number | null
    sermon_id: number | null
    order: number | null
  }

  export type SermonBlockSumAggregateOutputType = {
    id: bigint | null
    sermon_id: bigint | null
    order: bigint | null
  }

  export type SermonBlockMinAggregateOutputType = {
    id: bigint | null
    sermon_id: bigint | null
    title: string | null
    content: string | null
    order: bigint | null
  }

  export type SermonBlockMaxAggregateOutputType = {
    id: bigint | null
    sermon_id: bigint | null
    title: string | null
    content: string | null
    order: bigint | null
  }

  export type SermonBlockCountAggregateOutputType = {
    id: number
    sermon_id: number
    title: number
    content: number
    order: number
    _all: number
  }


  export type SermonBlockAvgAggregateInputType = {
    id?: true
    sermon_id?: true
    order?: true
  }

  export type SermonBlockSumAggregateInputType = {
    id?: true
    sermon_id?: true
    order?: true
  }

  export type SermonBlockMinAggregateInputType = {
    id?: true
    sermon_id?: true
    title?: true
    content?: true
    order?: true
  }

  export type SermonBlockMaxAggregateInputType = {
    id?: true
    sermon_id?: true
    title?: true
    content?: true
    order?: true
  }

  export type SermonBlockCountAggregateInputType = {
    id?: true
    sermon_id?: true
    title?: true
    content?: true
    order?: true
    _all?: true
  }

  export type SermonBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SermonBlock to aggregate.
     */
    where?: SermonBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SermonBlocks to fetch.
     */
    orderBy?: SermonBlockOrderByWithRelationInput | SermonBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SermonBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SermonBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SermonBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SermonBlocks
    **/
    _count?: true | SermonBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SermonBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SermonBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SermonBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SermonBlockMaxAggregateInputType
  }

  export type GetSermonBlockAggregateType<T extends SermonBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateSermonBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSermonBlock[P]>
      : GetScalarType<T[P], AggregateSermonBlock[P]>
  }




  export type SermonBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SermonBlockWhereInput
    orderBy?: SermonBlockOrderByWithAggregationInput | SermonBlockOrderByWithAggregationInput[]
    by: SermonBlockScalarFieldEnum[] | SermonBlockScalarFieldEnum
    having?: SermonBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SermonBlockCountAggregateInputType | true
    _avg?: SermonBlockAvgAggregateInputType
    _sum?: SermonBlockSumAggregateInputType
    _min?: SermonBlockMinAggregateInputType
    _max?: SermonBlockMaxAggregateInputType
  }

  export type SermonBlockGroupByOutputType = {
    id: bigint
    sermon_id: bigint
    title: string | null
    content: string | null
    order: bigint
    _count: SermonBlockCountAggregateOutputType | null
    _avg: SermonBlockAvgAggregateOutputType | null
    _sum: SermonBlockSumAggregateOutputType | null
    _min: SermonBlockMinAggregateOutputType | null
    _max: SermonBlockMaxAggregateOutputType | null
  }

  type GetSermonBlockGroupByPayload<T extends SermonBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SermonBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SermonBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SermonBlockGroupByOutputType[P]>
            : GetScalarType<T[P], SermonBlockGroupByOutputType[P]>
        }
      >
    >


  export type SermonBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sermon_id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
    sermon_block_images?: boolean | SermonBlock$sermon_block_imagesArgs<ExtArgs>
    _count?: boolean | SermonBlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sermonBlock"]>

  export type SermonBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sermon_id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sermonBlock"]>

  export type SermonBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sermon_id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sermonBlock"]>

  export type SermonBlockSelectScalar = {
    id?: boolean
    sermon_id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
  }

  export type SermonBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sermon_id" | "title" | "content" | "order", ExtArgs["result"]["sermonBlock"]>
  export type SermonBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
    sermon_block_images?: boolean | SermonBlock$sermon_block_imagesArgs<ExtArgs>
    _count?: boolean | SermonBlockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SermonBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }
  export type SermonBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }

  export type $SermonBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SermonBlock"
    objects: {
      sermon: Prisma.$SermonPayload<ExtArgs>
      sermon_block_images: Prisma.$SermonBlockImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      sermon_id: bigint
      title: string | null
      content: string | null
      order: bigint
    }, ExtArgs["result"]["sermonBlock"]>
    composites: {}
  }

  type SermonBlockGetPayload<S extends boolean | null | undefined | SermonBlockDefaultArgs> = $Result.GetResult<Prisma.$SermonBlockPayload, S>

  type SermonBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SermonBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SermonBlockCountAggregateInputType | true
    }

  export interface SermonBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SermonBlock'], meta: { name: 'SermonBlock' } }
    /**
     * Find zero or one SermonBlock that matches the filter.
     * @param {SermonBlockFindUniqueArgs} args - Arguments to find a SermonBlock
     * @example
     * // Get one SermonBlock
     * const sermonBlock = await prisma.sermonBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SermonBlockFindUniqueArgs>(args: SelectSubset<T, SermonBlockFindUniqueArgs<ExtArgs>>): Prisma__SermonBlockClient<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SermonBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SermonBlockFindUniqueOrThrowArgs} args - Arguments to find a SermonBlock
     * @example
     * // Get one SermonBlock
     * const sermonBlock = await prisma.sermonBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SermonBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, SermonBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SermonBlockClient<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SermonBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockFindFirstArgs} args - Arguments to find a SermonBlock
     * @example
     * // Get one SermonBlock
     * const sermonBlock = await prisma.sermonBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SermonBlockFindFirstArgs>(args?: SelectSubset<T, SermonBlockFindFirstArgs<ExtArgs>>): Prisma__SermonBlockClient<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SermonBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockFindFirstOrThrowArgs} args - Arguments to find a SermonBlock
     * @example
     * // Get one SermonBlock
     * const sermonBlock = await prisma.sermonBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SermonBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, SermonBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__SermonBlockClient<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SermonBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SermonBlocks
     * const sermonBlocks = await prisma.sermonBlock.findMany()
     * 
     * // Get first 10 SermonBlocks
     * const sermonBlocks = await prisma.sermonBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sermonBlockWithIdOnly = await prisma.sermonBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SermonBlockFindManyArgs>(args?: SelectSubset<T, SermonBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SermonBlock.
     * @param {SermonBlockCreateArgs} args - Arguments to create a SermonBlock.
     * @example
     * // Create one SermonBlock
     * const SermonBlock = await prisma.sermonBlock.create({
     *   data: {
     *     // ... data to create a SermonBlock
     *   }
     * })
     * 
     */
    create<T extends SermonBlockCreateArgs>(args: SelectSubset<T, SermonBlockCreateArgs<ExtArgs>>): Prisma__SermonBlockClient<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SermonBlocks.
     * @param {SermonBlockCreateManyArgs} args - Arguments to create many SermonBlocks.
     * @example
     * // Create many SermonBlocks
     * const sermonBlock = await prisma.sermonBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SermonBlockCreateManyArgs>(args?: SelectSubset<T, SermonBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SermonBlocks and returns the data saved in the database.
     * @param {SermonBlockCreateManyAndReturnArgs} args - Arguments to create many SermonBlocks.
     * @example
     * // Create many SermonBlocks
     * const sermonBlock = await prisma.sermonBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SermonBlocks and only return the `id`
     * const sermonBlockWithIdOnly = await prisma.sermonBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SermonBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, SermonBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SermonBlock.
     * @param {SermonBlockDeleteArgs} args - Arguments to delete one SermonBlock.
     * @example
     * // Delete one SermonBlock
     * const SermonBlock = await prisma.sermonBlock.delete({
     *   where: {
     *     // ... filter to delete one SermonBlock
     *   }
     * })
     * 
     */
    delete<T extends SermonBlockDeleteArgs>(args: SelectSubset<T, SermonBlockDeleteArgs<ExtArgs>>): Prisma__SermonBlockClient<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SermonBlock.
     * @param {SermonBlockUpdateArgs} args - Arguments to update one SermonBlock.
     * @example
     * // Update one SermonBlock
     * const sermonBlock = await prisma.sermonBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SermonBlockUpdateArgs>(args: SelectSubset<T, SermonBlockUpdateArgs<ExtArgs>>): Prisma__SermonBlockClient<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SermonBlocks.
     * @param {SermonBlockDeleteManyArgs} args - Arguments to filter SermonBlocks to delete.
     * @example
     * // Delete a few SermonBlocks
     * const { count } = await prisma.sermonBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SermonBlockDeleteManyArgs>(args?: SelectSubset<T, SermonBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SermonBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SermonBlocks
     * const sermonBlock = await prisma.sermonBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SermonBlockUpdateManyArgs>(args: SelectSubset<T, SermonBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SermonBlocks and returns the data updated in the database.
     * @param {SermonBlockUpdateManyAndReturnArgs} args - Arguments to update many SermonBlocks.
     * @example
     * // Update many SermonBlocks
     * const sermonBlock = await prisma.sermonBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SermonBlocks and only return the `id`
     * const sermonBlockWithIdOnly = await prisma.sermonBlock.updateManyAndReturn({
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
    updateManyAndReturn<T extends SermonBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, SermonBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SermonBlock.
     * @param {SermonBlockUpsertArgs} args - Arguments to update or create a SermonBlock.
     * @example
     * // Update or create a SermonBlock
     * const sermonBlock = await prisma.sermonBlock.upsert({
     *   create: {
     *     // ... data to create a SermonBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SermonBlock we want to update
     *   }
     * })
     */
    upsert<T extends SermonBlockUpsertArgs>(args: SelectSubset<T, SermonBlockUpsertArgs<ExtArgs>>): Prisma__SermonBlockClient<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SermonBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockCountArgs} args - Arguments to filter SermonBlocks to count.
     * @example
     * // Count the number of SermonBlocks
     * const count = await prisma.sermonBlock.count({
     *   where: {
     *     // ... the filter for the SermonBlocks we want to count
     *   }
     * })
    **/
    count<T extends SermonBlockCountArgs>(
      args?: Subset<T, SermonBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SermonBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SermonBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SermonBlockAggregateArgs>(args: Subset<T, SermonBlockAggregateArgs>): Prisma.PrismaPromise<GetSermonBlockAggregateType<T>>

    /**
     * Group by SermonBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockGroupByArgs} args - Group by arguments.
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
      T extends SermonBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SermonBlockGroupByArgs['orderBy'] }
        : { orderBy?: SermonBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SermonBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSermonBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SermonBlock model
   */
  readonly fields: SermonBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SermonBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SermonBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sermon<T extends SermonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SermonDefaultArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sermon_block_images<T extends SermonBlock$sermon_block_imagesArgs<ExtArgs> = {}>(args?: Subset<T, SermonBlock$sermon_block_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SermonBlock model
   */
  interface SermonBlockFieldRefs {
    readonly id: FieldRef<"SermonBlock", 'BigInt'>
    readonly sermon_id: FieldRef<"SermonBlock", 'BigInt'>
    readonly title: FieldRef<"SermonBlock", 'String'>
    readonly content: FieldRef<"SermonBlock", 'String'>
    readonly order: FieldRef<"SermonBlock", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * SermonBlock findUnique
   */
  export type SermonBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlock to fetch.
     */
    where: SermonBlockWhereUniqueInput
  }

  /**
   * SermonBlock findUniqueOrThrow
   */
  export type SermonBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlock to fetch.
     */
    where: SermonBlockWhereUniqueInput
  }

  /**
   * SermonBlock findFirst
   */
  export type SermonBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlock to fetch.
     */
    where?: SermonBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SermonBlocks to fetch.
     */
    orderBy?: SermonBlockOrderByWithRelationInput | SermonBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SermonBlocks.
     */
    cursor?: SermonBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SermonBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SermonBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SermonBlocks.
     */
    distinct?: SermonBlockScalarFieldEnum | SermonBlockScalarFieldEnum[]
  }

  /**
   * SermonBlock findFirstOrThrow
   */
  export type SermonBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlock to fetch.
     */
    where?: SermonBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SermonBlocks to fetch.
     */
    orderBy?: SermonBlockOrderByWithRelationInput | SermonBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SermonBlocks.
     */
    cursor?: SermonBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SermonBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SermonBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SermonBlocks.
     */
    distinct?: SermonBlockScalarFieldEnum | SermonBlockScalarFieldEnum[]
  }

  /**
   * SermonBlock findMany
   */
  export type SermonBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlocks to fetch.
     */
    where?: SermonBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SermonBlocks to fetch.
     */
    orderBy?: SermonBlockOrderByWithRelationInput | SermonBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SermonBlocks.
     */
    cursor?: SermonBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SermonBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SermonBlocks.
     */
    skip?: number
    distinct?: SermonBlockScalarFieldEnum | SermonBlockScalarFieldEnum[]
  }

  /**
   * SermonBlock create
   */
  export type SermonBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a SermonBlock.
     */
    data: XOR<SermonBlockCreateInput, SermonBlockUncheckedCreateInput>
  }

  /**
   * SermonBlock createMany
   */
  export type SermonBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SermonBlocks.
     */
    data: SermonBlockCreateManyInput | SermonBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SermonBlock createManyAndReturn
   */
  export type SermonBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * The data used to create many SermonBlocks.
     */
    data: SermonBlockCreateManyInput | SermonBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SermonBlock update
   */
  export type SermonBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a SermonBlock.
     */
    data: XOR<SermonBlockUpdateInput, SermonBlockUncheckedUpdateInput>
    /**
     * Choose, which SermonBlock to update.
     */
    where: SermonBlockWhereUniqueInput
  }

  /**
   * SermonBlock updateMany
   */
  export type SermonBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SermonBlocks.
     */
    data: XOR<SermonBlockUpdateManyMutationInput, SermonBlockUncheckedUpdateManyInput>
    /**
     * Filter which SermonBlocks to update
     */
    where?: SermonBlockWhereInput
    /**
     * Limit how many SermonBlocks to update.
     */
    limit?: number
  }

  /**
   * SermonBlock updateManyAndReturn
   */
  export type SermonBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * The data used to update SermonBlocks.
     */
    data: XOR<SermonBlockUpdateManyMutationInput, SermonBlockUncheckedUpdateManyInput>
    /**
     * Filter which SermonBlocks to update
     */
    where?: SermonBlockWhereInput
    /**
     * Limit how many SermonBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SermonBlock upsert
   */
  export type SermonBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the SermonBlock to update in case it exists.
     */
    where: SermonBlockWhereUniqueInput
    /**
     * In case the SermonBlock found by the `where` argument doesn't exist, create a new SermonBlock with this data.
     */
    create: XOR<SermonBlockCreateInput, SermonBlockUncheckedCreateInput>
    /**
     * In case the SermonBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SermonBlockUpdateInput, SermonBlockUncheckedUpdateInput>
  }

  /**
   * SermonBlock delete
   */
  export type SermonBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
    /**
     * Filter which SermonBlock to delete.
     */
    where: SermonBlockWhereUniqueInput
  }

  /**
   * SermonBlock deleteMany
   */
  export type SermonBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SermonBlocks to delete
     */
    where?: SermonBlockWhereInput
    /**
     * Limit how many SermonBlocks to delete.
     */
    limit?: number
  }

  /**
   * SermonBlock.sermon_block_images
   */
  export type SermonBlock$sermon_block_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    where?: SermonBlockImageWhereInput
    orderBy?: SermonBlockImageOrderByWithRelationInput | SermonBlockImageOrderByWithRelationInput[]
    cursor?: SermonBlockImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SermonBlockImageScalarFieldEnum | SermonBlockImageScalarFieldEnum[]
  }

  /**
   * SermonBlock without action
   */
  export type SermonBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlock
     */
    select?: SermonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlock
     */
    omit?: SermonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockInclude<ExtArgs> | null
  }


  /**
   * Model SermonBlockImage
   */

  export type AggregateSermonBlockImage = {
    _count: SermonBlockImageCountAggregateOutputType | null
    _avg: SermonBlockImageAvgAggregateOutputType | null
    _sum: SermonBlockImageSumAggregateOutputType | null
    _min: SermonBlockImageMinAggregateOutputType | null
    _max: SermonBlockImageMaxAggregateOutputType | null
  }

  export type SermonBlockImageAvgAggregateOutputType = {
    id: number | null
    sermon_block_id: number | null
    image_id: number | null
    order: number | null
  }

  export type SermonBlockImageSumAggregateOutputType = {
    id: bigint | null
    sermon_block_id: bigint | null
    image_id: bigint | null
    order: bigint | null
  }

  export type SermonBlockImageMinAggregateOutputType = {
    id: bigint | null
    sermon_block_id: bigint | null
    image_id: bigint | null
    order: bigint | null
  }

  export type SermonBlockImageMaxAggregateOutputType = {
    id: bigint | null
    sermon_block_id: bigint | null
    image_id: bigint | null
    order: bigint | null
  }

  export type SermonBlockImageCountAggregateOutputType = {
    id: number
    sermon_block_id: number
    image_id: number
    order: number
    _all: number
  }


  export type SermonBlockImageAvgAggregateInputType = {
    id?: true
    sermon_block_id?: true
    image_id?: true
    order?: true
  }

  export type SermonBlockImageSumAggregateInputType = {
    id?: true
    sermon_block_id?: true
    image_id?: true
    order?: true
  }

  export type SermonBlockImageMinAggregateInputType = {
    id?: true
    sermon_block_id?: true
    image_id?: true
    order?: true
  }

  export type SermonBlockImageMaxAggregateInputType = {
    id?: true
    sermon_block_id?: true
    image_id?: true
    order?: true
  }

  export type SermonBlockImageCountAggregateInputType = {
    id?: true
    sermon_block_id?: true
    image_id?: true
    order?: true
    _all?: true
  }

  export type SermonBlockImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SermonBlockImage to aggregate.
     */
    where?: SermonBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SermonBlockImages to fetch.
     */
    orderBy?: SermonBlockImageOrderByWithRelationInput | SermonBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SermonBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SermonBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SermonBlockImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SermonBlockImages
    **/
    _count?: true | SermonBlockImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SermonBlockImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SermonBlockImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SermonBlockImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SermonBlockImageMaxAggregateInputType
  }

  export type GetSermonBlockImageAggregateType<T extends SermonBlockImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSermonBlockImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSermonBlockImage[P]>
      : GetScalarType<T[P], AggregateSermonBlockImage[P]>
  }




  export type SermonBlockImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SermonBlockImageWhereInput
    orderBy?: SermonBlockImageOrderByWithAggregationInput | SermonBlockImageOrderByWithAggregationInput[]
    by: SermonBlockImageScalarFieldEnum[] | SermonBlockImageScalarFieldEnum
    having?: SermonBlockImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SermonBlockImageCountAggregateInputType | true
    _avg?: SermonBlockImageAvgAggregateInputType
    _sum?: SermonBlockImageSumAggregateInputType
    _min?: SermonBlockImageMinAggregateInputType
    _max?: SermonBlockImageMaxAggregateInputType
  }

  export type SermonBlockImageGroupByOutputType = {
    id: bigint
    sermon_block_id: bigint
    image_id: bigint
    order: bigint
    _count: SermonBlockImageCountAggregateOutputType | null
    _avg: SermonBlockImageAvgAggregateOutputType | null
    _sum: SermonBlockImageSumAggregateOutputType | null
    _min: SermonBlockImageMinAggregateOutputType | null
    _max: SermonBlockImageMaxAggregateOutputType | null
  }

  type GetSermonBlockImageGroupByPayload<T extends SermonBlockImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SermonBlockImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SermonBlockImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SermonBlockImageGroupByOutputType[P]>
            : GetScalarType<T[P], SermonBlockImageGroupByOutputType[P]>
        }
      >
    >


  export type SermonBlockImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sermon_block_id?: boolean
    image_id?: boolean
    order?: boolean
    sermon_block?: boolean | SermonBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sermonBlockImage"]>

  export type SermonBlockImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sermon_block_id?: boolean
    image_id?: boolean
    order?: boolean
    sermon_block?: boolean | SermonBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sermonBlockImage"]>

  export type SermonBlockImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sermon_block_id?: boolean
    image_id?: boolean
    order?: boolean
    sermon_block?: boolean | SermonBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sermonBlockImage"]>

  export type SermonBlockImageSelectScalar = {
    id?: boolean
    sermon_block_id?: boolean
    image_id?: boolean
    order?: boolean
  }

  export type SermonBlockImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sermon_block_id" | "image_id" | "order", ExtArgs["result"]["sermonBlockImage"]>
  export type SermonBlockImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon_block?: boolean | SermonBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type SermonBlockImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon_block?: boolean | SermonBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type SermonBlockImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon_block?: boolean | SermonBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $SermonBlockImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SermonBlockImage"
    objects: {
      sermon_block: Prisma.$SermonBlockPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      sermon_block_id: bigint
      image_id: bigint
      order: bigint
    }, ExtArgs["result"]["sermonBlockImage"]>
    composites: {}
  }

  type SermonBlockImageGetPayload<S extends boolean | null | undefined | SermonBlockImageDefaultArgs> = $Result.GetResult<Prisma.$SermonBlockImagePayload, S>

  type SermonBlockImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SermonBlockImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SermonBlockImageCountAggregateInputType | true
    }

  export interface SermonBlockImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SermonBlockImage'], meta: { name: 'SermonBlockImage' } }
    /**
     * Find zero or one SermonBlockImage that matches the filter.
     * @param {SermonBlockImageFindUniqueArgs} args - Arguments to find a SermonBlockImage
     * @example
     * // Get one SermonBlockImage
     * const sermonBlockImage = await prisma.sermonBlockImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SermonBlockImageFindUniqueArgs>(args: SelectSubset<T, SermonBlockImageFindUniqueArgs<ExtArgs>>): Prisma__SermonBlockImageClient<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SermonBlockImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SermonBlockImageFindUniqueOrThrowArgs} args - Arguments to find a SermonBlockImage
     * @example
     * // Get one SermonBlockImage
     * const sermonBlockImage = await prisma.sermonBlockImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SermonBlockImageFindUniqueOrThrowArgs>(args: SelectSubset<T, SermonBlockImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SermonBlockImageClient<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SermonBlockImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockImageFindFirstArgs} args - Arguments to find a SermonBlockImage
     * @example
     * // Get one SermonBlockImage
     * const sermonBlockImage = await prisma.sermonBlockImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SermonBlockImageFindFirstArgs>(args?: SelectSubset<T, SermonBlockImageFindFirstArgs<ExtArgs>>): Prisma__SermonBlockImageClient<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SermonBlockImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockImageFindFirstOrThrowArgs} args - Arguments to find a SermonBlockImage
     * @example
     * // Get one SermonBlockImage
     * const sermonBlockImage = await prisma.sermonBlockImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SermonBlockImageFindFirstOrThrowArgs>(args?: SelectSubset<T, SermonBlockImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SermonBlockImageClient<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SermonBlockImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SermonBlockImages
     * const sermonBlockImages = await prisma.sermonBlockImage.findMany()
     * 
     * // Get first 10 SermonBlockImages
     * const sermonBlockImages = await prisma.sermonBlockImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sermonBlockImageWithIdOnly = await prisma.sermonBlockImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SermonBlockImageFindManyArgs>(args?: SelectSubset<T, SermonBlockImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SermonBlockImage.
     * @param {SermonBlockImageCreateArgs} args - Arguments to create a SermonBlockImage.
     * @example
     * // Create one SermonBlockImage
     * const SermonBlockImage = await prisma.sermonBlockImage.create({
     *   data: {
     *     // ... data to create a SermonBlockImage
     *   }
     * })
     * 
     */
    create<T extends SermonBlockImageCreateArgs>(args: SelectSubset<T, SermonBlockImageCreateArgs<ExtArgs>>): Prisma__SermonBlockImageClient<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SermonBlockImages.
     * @param {SermonBlockImageCreateManyArgs} args - Arguments to create many SermonBlockImages.
     * @example
     * // Create many SermonBlockImages
     * const sermonBlockImage = await prisma.sermonBlockImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SermonBlockImageCreateManyArgs>(args?: SelectSubset<T, SermonBlockImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SermonBlockImages and returns the data saved in the database.
     * @param {SermonBlockImageCreateManyAndReturnArgs} args - Arguments to create many SermonBlockImages.
     * @example
     * // Create many SermonBlockImages
     * const sermonBlockImage = await prisma.sermonBlockImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SermonBlockImages and only return the `id`
     * const sermonBlockImageWithIdOnly = await prisma.sermonBlockImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SermonBlockImageCreateManyAndReturnArgs>(args?: SelectSubset<T, SermonBlockImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SermonBlockImage.
     * @param {SermonBlockImageDeleteArgs} args - Arguments to delete one SermonBlockImage.
     * @example
     * // Delete one SermonBlockImage
     * const SermonBlockImage = await prisma.sermonBlockImage.delete({
     *   where: {
     *     // ... filter to delete one SermonBlockImage
     *   }
     * })
     * 
     */
    delete<T extends SermonBlockImageDeleteArgs>(args: SelectSubset<T, SermonBlockImageDeleteArgs<ExtArgs>>): Prisma__SermonBlockImageClient<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SermonBlockImage.
     * @param {SermonBlockImageUpdateArgs} args - Arguments to update one SermonBlockImage.
     * @example
     * // Update one SermonBlockImage
     * const sermonBlockImage = await prisma.sermonBlockImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SermonBlockImageUpdateArgs>(args: SelectSubset<T, SermonBlockImageUpdateArgs<ExtArgs>>): Prisma__SermonBlockImageClient<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SermonBlockImages.
     * @param {SermonBlockImageDeleteManyArgs} args - Arguments to filter SermonBlockImages to delete.
     * @example
     * // Delete a few SermonBlockImages
     * const { count } = await prisma.sermonBlockImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SermonBlockImageDeleteManyArgs>(args?: SelectSubset<T, SermonBlockImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SermonBlockImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SermonBlockImages
     * const sermonBlockImage = await prisma.sermonBlockImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SermonBlockImageUpdateManyArgs>(args: SelectSubset<T, SermonBlockImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SermonBlockImages and returns the data updated in the database.
     * @param {SermonBlockImageUpdateManyAndReturnArgs} args - Arguments to update many SermonBlockImages.
     * @example
     * // Update many SermonBlockImages
     * const sermonBlockImage = await prisma.sermonBlockImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SermonBlockImages and only return the `id`
     * const sermonBlockImageWithIdOnly = await prisma.sermonBlockImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SermonBlockImageUpdateManyAndReturnArgs>(args: SelectSubset<T, SermonBlockImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SermonBlockImage.
     * @param {SermonBlockImageUpsertArgs} args - Arguments to update or create a SermonBlockImage.
     * @example
     * // Update or create a SermonBlockImage
     * const sermonBlockImage = await prisma.sermonBlockImage.upsert({
     *   create: {
     *     // ... data to create a SermonBlockImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SermonBlockImage we want to update
     *   }
     * })
     */
    upsert<T extends SermonBlockImageUpsertArgs>(args: SelectSubset<T, SermonBlockImageUpsertArgs<ExtArgs>>): Prisma__SermonBlockImageClient<$Result.GetResult<Prisma.$SermonBlockImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SermonBlockImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockImageCountArgs} args - Arguments to filter SermonBlockImages to count.
     * @example
     * // Count the number of SermonBlockImages
     * const count = await prisma.sermonBlockImage.count({
     *   where: {
     *     // ... the filter for the SermonBlockImages we want to count
     *   }
     * })
    **/
    count<T extends SermonBlockImageCountArgs>(
      args?: Subset<T, SermonBlockImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SermonBlockImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SermonBlockImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SermonBlockImageAggregateArgs>(args: Subset<T, SermonBlockImageAggregateArgs>): Prisma.PrismaPromise<GetSermonBlockImageAggregateType<T>>

    /**
     * Group by SermonBlockImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonBlockImageGroupByArgs} args - Group by arguments.
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
      T extends SermonBlockImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SermonBlockImageGroupByArgs['orderBy'] }
        : { orderBy?: SermonBlockImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SermonBlockImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSermonBlockImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SermonBlockImage model
   */
  readonly fields: SermonBlockImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SermonBlockImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SermonBlockImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sermon_block<T extends SermonBlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SermonBlockDefaultArgs<ExtArgs>>): Prisma__SermonBlockClient<$Result.GetResult<Prisma.$SermonBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SermonBlockImage model
   */
  interface SermonBlockImageFieldRefs {
    readonly id: FieldRef<"SermonBlockImage", 'BigInt'>
    readonly sermon_block_id: FieldRef<"SermonBlockImage", 'BigInt'>
    readonly image_id: FieldRef<"SermonBlockImage", 'BigInt'>
    readonly order: FieldRef<"SermonBlockImage", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * SermonBlockImage findUnique
   */
  export type SermonBlockImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlockImage to fetch.
     */
    where: SermonBlockImageWhereUniqueInput
  }

  /**
   * SermonBlockImage findUniqueOrThrow
   */
  export type SermonBlockImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlockImage to fetch.
     */
    where: SermonBlockImageWhereUniqueInput
  }

  /**
   * SermonBlockImage findFirst
   */
  export type SermonBlockImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlockImage to fetch.
     */
    where?: SermonBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SermonBlockImages to fetch.
     */
    orderBy?: SermonBlockImageOrderByWithRelationInput | SermonBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SermonBlockImages.
     */
    cursor?: SermonBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SermonBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SermonBlockImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SermonBlockImages.
     */
    distinct?: SermonBlockImageScalarFieldEnum | SermonBlockImageScalarFieldEnum[]
  }

  /**
   * SermonBlockImage findFirstOrThrow
   */
  export type SermonBlockImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlockImage to fetch.
     */
    where?: SermonBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SermonBlockImages to fetch.
     */
    orderBy?: SermonBlockImageOrderByWithRelationInput | SermonBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SermonBlockImages.
     */
    cursor?: SermonBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SermonBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SermonBlockImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SermonBlockImages.
     */
    distinct?: SermonBlockImageScalarFieldEnum | SermonBlockImageScalarFieldEnum[]
  }

  /**
   * SermonBlockImage findMany
   */
  export type SermonBlockImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which SermonBlockImages to fetch.
     */
    where?: SermonBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SermonBlockImages to fetch.
     */
    orderBy?: SermonBlockImageOrderByWithRelationInput | SermonBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SermonBlockImages.
     */
    cursor?: SermonBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SermonBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SermonBlockImages.
     */
    skip?: number
    distinct?: SermonBlockImageScalarFieldEnum | SermonBlockImageScalarFieldEnum[]
  }

  /**
   * SermonBlockImage create
   */
  export type SermonBlockImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    /**
     * The data needed to create a SermonBlockImage.
     */
    data: XOR<SermonBlockImageCreateInput, SermonBlockImageUncheckedCreateInput>
  }

  /**
   * SermonBlockImage createMany
   */
  export type SermonBlockImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SermonBlockImages.
     */
    data: SermonBlockImageCreateManyInput | SermonBlockImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SermonBlockImage createManyAndReturn
   */
  export type SermonBlockImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * The data used to create many SermonBlockImages.
     */
    data: SermonBlockImageCreateManyInput | SermonBlockImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SermonBlockImage update
   */
  export type SermonBlockImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    /**
     * The data needed to update a SermonBlockImage.
     */
    data: XOR<SermonBlockImageUpdateInput, SermonBlockImageUncheckedUpdateInput>
    /**
     * Choose, which SermonBlockImage to update.
     */
    where: SermonBlockImageWhereUniqueInput
  }

  /**
   * SermonBlockImage updateMany
   */
  export type SermonBlockImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SermonBlockImages.
     */
    data: XOR<SermonBlockImageUpdateManyMutationInput, SermonBlockImageUncheckedUpdateManyInput>
    /**
     * Filter which SermonBlockImages to update
     */
    where?: SermonBlockImageWhereInput
    /**
     * Limit how many SermonBlockImages to update.
     */
    limit?: number
  }

  /**
   * SermonBlockImage updateManyAndReturn
   */
  export type SermonBlockImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * The data used to update SermonBlockImages.
     */
    data: XOR<SermonBlockImageUpdateManyMutationInput, SermonBlockImageUncheckedUpdateManyInput>
    /**
     * Filter which SermonBlockImages to update
     */
    where?: SermonBlockImageWhereInput
    /**
     * Limit how many SermonBlockImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SermonBlockImage upsert
   */
  export type SermonBlockImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    /**
     * The filter to search for the SermonBlockImage to update in case it exists.
     */
    where: SermonBlockImageWhereUniqueInput
    /**
     * In case the SermonBlockImage found by the `where` argument doesn't exist, create a new SermonBlockImage with this data.
     */
    create: XOR<SermonBlockImageCreateInput, SermonBlockImageUncheckedCreateInput>
    /**
     * In case the SermonBlockImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SermonBlockImageUpdateInput, SermonBlockImageUncheckedUpdateInput>
  }

  /**
   * SermonBlockImage delete
   */
  export type SermonBlockImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
    /**
     * Filter which SermonBlockImage to delete.
     */
    where: SermonBlockImageWhereUniqueInput
  }

  /**
   * SermonBlockImage deleteMany
   */
  export type SermonBlockImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SermonBlockImages to delete
     */
    where?: SermonBlockImageWhereInput
    /**
     * Limit how many SermonBlockImages to delete.
     */
    limit?: number
  }

  /**
   * SermonBlockImage without action
   */
  export type SermonBlockImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonBlockImage
     */
    select?: SermonBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SermonBlockImage
     */
    omit?: SermonBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonBlockImageInclude<ExtArgs> | null
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


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    is_published: 'is_published',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const NewsBlockScalarFieldEnum: {
    id: 'id',
    news_id: 'news_id',
    title: 'title',
    content: 'content',
    order: 'order'
  };

  export type NewsBlockScalarFieldEnum = (typeof NewsBlockScalarFieldEnum)[keyof typeof NewsBlockScalarFieldEnum]


  export const NewsBlockImageScalarFieldEnum: {
    id: 'id',
    news_block_id: 'news_block_id',
    image_id: 'image_id',
    order: 'order'
  };

  export type NewsBlockImageScalarFieldEnum = (typeof NewsBlockImageScalarFieldEnum)[keyof typeof NewsBlockImageScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const SermonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    preacher_name: 'preacher_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type SermonScalarFieldEnum = (typeof SermonScalarFieldEnum)[keyof typeof SermonScalarFieldEnum]


  export const SermonBlockScalarFieldEnum: {
    id: 'id',
    sermon_id: 'sermon_id',
    title: 'title',
    content: 'content',
    order: 'order'
  };

  export type SermonBlockScalarFieldEnum = (typeof SermonBlockScalarFieldEnum)[keyof typeof SermonBlockScalarFieldEnum]


  export const SermonBlockImageScalarFieldEnum: {
    id: 'id',
    sermon_block_id: 'sermon_block_id',
    image_id: 'image_id',
    order: 'order'
  };

  export type SermonBlockImageScalarFieldEnum = (typeof SermonBlockImageScalarFieldEnum)[keyof typeof SermonBlockImageScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: BigIntFilter<"News"> | bigint | number
    title?: StringNullableFilter<"News"> | string | null
    is_published?: BoolFilter<"News"> | boolean
    created_at?: DateTimeFilter<"News"> | Date | string
    updated_at?: DateTimeFilter<"News"> | Date | string
    deleted_at?: DateTimeNullableFilter<"News"> | Date | string | null
    news_blocks?: NewsBlockListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    news_blocks?: NewsBlockOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringNullableFilter<"News"> | string | null
    is_published?: BoolFilter<"News"> | boolean
    created_at?: DateTimeFilter<"News"> | Date | string
    updated_at?: DateTimeFilter<"News"> | Date | string
    deleted_at?: DateTimeNullableFilter<"News"> | Date | string | null
    news_blocks?: NewsBlockListRelationFilter
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"News"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"News"> | string | null
    is_published?: BoolWithAggregatesFilter<"News"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"News"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
  }

  export type NewsBlockWhereInput = {
    AND?: NewsBlockWhereInput | NewsBlockWhereInput[]
    OR?: NewsBlockWhereInput[]
    NOT?: NewsBlockWhereInput | NewsBlockWhereInput[]
    id?: BigIntFilter<"NewsBlock"> | bigint | number
    news_id?: BigIntFilter<"NewsBlock"> | bigint | number
    title?: StringNullableFilter<"NewsBlock"> | string | null
    content?: StringNullableFilter<"NewsBlock"> | string | null
    order?: BigIntFilter<"NewsBlock"> | bigint | number
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    news_block_images?: NewsBlockImageListRelationFilter
  }

  export type NewsBlockOrderByWithRelationInput = {
    id?: SortOrder
    news_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    order?: SortOrder
    news?: NewsOrderByWithRelationInput
    news_block_images?: NewsBlockImageOrderByRelationAggregateInput
  }

  export type NewsBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: NewsBlockWhereInput | NewsBlockWhereInput[]
    OR?: NewsBlockWhereInput[]
    NOT?: NewsBlockWhereInput | NewsBlockWhereInput[]
    news_id?: BigIntFilter<"NewsBlock"> | bigint | number
    title?: StringNullableFilter<"NewsBlock"> | string | null
    content?: StringNullableFilter<"NewsBlock"> | string | null
    order?: BigIntFilter<"NewsBlock"> | bigint | number
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    news_block_images?: NewsBlockImageListRelationFilter
  }, "id">

  export type NewsBlockOrderByWithAggregationInput = {
    id?: SortOrder
    news_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: NewsBlockCountOrderByAggregateInput
    _avg?: NewsBlockAvgOrderByAggregateInput
    _max?: NewsBlockMaxOrderByAggregateInput
    _min?: NewsBlockMinOrderByAggregateInput
    _sum?: NewsBlockSumOrderByAggregateInput
  }

  export type NewsBlockScalarWhereWithAggregatesInput = {
    AND?: NewsBlockScalarWhereWithAggregatesInput | NewsBlockScalarWhereWithAggregatesInput[]
    OR?: NewsBlockScalarWhereWithAggregatesInput[]
    NOT?: NewsBlockScalarWhereWithAggregatesInput | NewsBlockScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"NewsBlock"> | bigint | number
    news_id?: BigIntWithAggregatesFilter<"NewsBlock"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"NewsBlock"> | string | null
    content?: StringNullableWithAggregatesFilter<"NewsBlock"> | string | null
    order?: BigIntWithAggregatesFilter<"NewsBlock"> | bigint | number
  }

  export type NewsBlockImageWhereInput = {
    AND?: NewsBlockImageWhereInput | NewsBlockImageWhereInput[]
    OR?: NewsBlockImageWhereInput[]
    NOT?: NewsBlockImageWhereInput | NewsBlockImageWhereInput[]
    id?: BigIntFilter<"NewsBlockImage"> | bigint | number
    news_block_id?: BigIntFilter<"NewsBlockImage"> | bigint | number
    image_id?: BigIntFilter<"NewsBlockImage"> | bigint | number
    order?: BigIntFilter<"NewsBlockImage"> | bigint | number
    news_block?: XOR<NewsBlockScalarRelationFilter, NewsBlockWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type NewsBlockImageOrderByWithRelationInput = {
    id?: SortOrder
    news_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
    news_block?: NewsBlockOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type NewsBlockImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: NewsBlockImageWhereInput | NewsBlockImageWhereInput[]
    OR?: NewsBlockImageWhereInput[]
    NOT?: NewsBlockImageWhereInput | NewsBlockImageWhereInput[]
    news_block_id?: BigIntFilter<"NewsBlockImage"> | bigint | number
    image_id?: BigIntFilter<"NewsBlockImage"> | bigint | number
    order?: BigIntFilter<"NewsBlockImage"> | bigint | number
    news_block?: XOR<NewsBlockScalarRelationFilter, NewsBlockWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id">

  export type NewsBlockImageOrderByWithAggregationInput = {
    id?: SortOrder
    news_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
    _count?: NewsBlockImageCountOrderByAggregateInput
    _avg?: NewsBlockImageAvgOrderByAggregateInput
    _max?: NewsBlockImageMaxOrderByAggregateInput
    _min?: NewsBlockImageMinOrderByAggregateInput
    _sum?: NewsBlockImageSumOrderByAggregateInput
  }

  export type NewsBlockImageScalarWhereWithAggregatesInput = {
    AND?: NewsBlockImageScalarWhereWithAggregatesInput | NewsBlockImageScalarWhereWithAggregatesInput[]
    OR?: NewsBlockImageScalarWhereWithAggregatesInput[]
    NOT?: NewsBlockImageScalarWhereWithAggregatesInput | NewsBlockImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"NewsBlockImage"> | bigint | number
    news_block_id?: BigIntWithAggregatesFilter<"NewsBlockImage"> | bigint | number
    image_id?: BigIntWithAggregatesFilter<"NewsBlockImage"> | bigint | number
    order?: BigIntWithAggregatesFilter<"NewsBlockImage"> | bigint | number
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: BigIntFilter<"Image"> | bigint | number
    url?: StringFilter<"Image"> | string
    alt?: StringFilter<"Image"> | string
    created_at?: DateTimeFilter<"Image"> | Date | string
    updated_at?: DateTimeFilter<"Image"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Image"> | Date | string | null
    NewsBlockImages?: NewsBlockImageListRelationFilter
    SermonsBlockImages?: SermonBlockImageListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    NewsBlockImages?: NewsBlockImageOrderByRelationAggregateInput
    SermonsBlockImages?: SermonBlockImageOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    alt?: StringFilter<"Image"> | string
    created_at?: DateTimeFilter<"Image"> | Date | string
    updated_at?: DateTimeFilter<"Image"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Image"> | Date | string | null
    NewsBlockImages?: NewsBlockImageListRelationFilter
    SermonsBlockImages?: SermonBlockImageListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Image"> | bigint | number
    url?: StringWithAggregatesFilter<"Image"> | string
    alt?: StringWithAggregatesFilter<"Image"> | string
    created_at?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Image"> | Date | string | null
  }

  export type SermonWhereInput = {
    AND?: SermonWhereInput | SermonWhereInput[]
    OR?: SermonWhereInput[]
    NOT?: SermonWhereInput | SermonWhereInput[]
    id?: BigIntFilter<"Sermon"> | bigint | number
    title?: StringNullableFilter<"Sermon"> | string | null
    preacher_name?: StringNullableFilter<"Sermon"> | string | null
    created_at?: DateTimeFilter<"Sermon"> | Date | string
    updated_at?: DateTimeFilter<"Sermon"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Sermon"> | Date | string | null
    sermon_blocks?: SermonBlockListRelationFilter
  }

  export type SermonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    preacher_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    sermon_blocks?: SermonBlockOrderByRelationAggregateInput
  }

  export type SermonWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SermonWhereInput | SermonWhereInput[]
    OR?: SermonWhereInput[]
    NOT?: SermonWhereInput | SermonWhereInput[]
    title?: StringNullableFilter<"Sermon"> | string | null
    preacher_name?: StringNullableFilter<"Sermon"> | string | null
    created_at?: DateTimeFilter<"Sermon"> | Date | string
    updated_at?: DateTimeFilter<"Sermon"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Sermon"> | Date | string | null
    sermon_blocks?: SermonBlockListRelationFilter
  }, "id">

  export type SermonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    preacher_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: SermonCountOrderByAggregateInput
    _avg?: SermonAvgOrderByAggregateInput
    _max?: SermonMaxOrderByAggregateInput
    _min?: SermonMinOrderByAggregateInput
    _sum?: SermonSumOrderByAggregateInput
  }

  export type SermonScalarWhereWithAggregatesInput = {
    AND?: SermonScalarWhereWithAggregatesInput | SermonScalarWhereWithAggregatesInput[]
    OR?: SermonScalarWhereWithAggregatesInput[]
    NOT?: SermonScalarWhereWithAggregatesInput | SermonScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Sermon"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"Sermon"> | string | null
    preacher_name?: StringNullableWithAggregatesFilter<"Sermon"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Sermon"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Sermon"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Sermon"> | Date | string | null
  }

  export type SermonBlockWhereInput = {
    AND?: SermonBlockWhereInput | SermonBlockWhereInput[]
    OR?: SermonBlockWhereInput[]
    NOT?: SermonBlockWhereInput | SermonBlockWhereInput[]
    id?: BigIntFilter<"SermonBlock"> | bigint | number
    sermon_id?: BigIntFilter<"SermonBlock"> | bigint | number
    title?: StringNullableFilter<"SermonBlock"> | string | null
    content?: StringNullableFilter<"SermonBlock"> | string | null
    order?: BigIntFilter<"SermonBlock"> | bigint | number
    sermon?: XOR<SermonScalarRelationFilter, SermonWhereInput>
    sermon_block_images?: SermonBlockImageListRelationFilter
  }

  export type SermonBlockOrderByWithRelationInput = {
    id?: SortOrder
    sermon_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    order?: SortOrder
    sermon?: SermonOrderByWithRelationInput
    sermon_block_images?: SermonBlockImageOrderByRelationAggregateInput
  }

  export type SermonBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SermonBlockWhereInput | SermonBlockWhereInput[]
    OR?: SermonBlockWhereInput[]
    NOT?: SermonBlockWhereInput | SermonBlockWhereInput[]
    sermon_id?: BigIntFilter<"SermonBlock"> | bigint | number
    title?: StringNullableFilter<"SermonBlock"> | string | null
    content?: StringNullableFilter<"SermonBlock"> | string | null
    order?: BigIntFilter<"SermonBlock"> | bigint | number
    sermon?: XOR<SermonScalarRelationFilter, SermonWhereInput>
    sermon_block_images?: SermonBlockImageListRelationFilter
  }, "id">

  export type SermonBlockOrderByWithAggregationInput = {
    id?: SortOrder
    sermon_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: SermonBlockCountOrderByAggregateInput
    _avg?: SermonBlockAvgOrderByAggregateInput
    _max?: SermonBlockMaxOrderByAggregateInput
    _min?: SermonBlockMinOrderByAggregateInput
    _sum?: SermonBlockSumOrderByAggregateInput
  }

  export type SermonBlockScalarWhereWithAggregatesInput = {
    AND?: SermonBlockScalarWhereWithAggregatesInput | SermonBlockScalarWhereWithAggregatesInput[]
    OR?: SermonBlockScalarWhereWithAggregatesInput[]
    NOT?: SermonBlockScalarWhereWithAggregatesInput | SermonBlockScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SermonBlock"> | bigint | number
    sermon_id?: BigIntWithAggregatesFilter<"SermonBlock"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"SermonBlock"> | string | null
    content?: StringNullableWithAggregatesFilter<"SermonBlock"> | string | null
    order?: BigIntWithAggregatesFilter<"SermonBlock"> | bigint | number
  }

  export type SermonBlockImageWhereInput = {
    AND?: SermonBlockImageWhereInput | SermonBlockImageWhereInput[]
    OR?: SermonBlockImageWhereInput[]
    NOT?: SermonBlockImageWhereInput | SermonBlockImageWhereInput[]
    id?: BigIntFilter<"SermonBlockImage"> | bigint | number
    sermon_block_id?: BigIntFilter<"SermonBlockImage"> | bigint | number
    image_id?: BigIntFilter<"SermonBlockImage"> | bigint | number
    order?: BigIntFilter<"SermonBlockImage"> | bigint | number
    sermon_block?: XOR<SermonBlockScalarRelationFilter, SermonBlockWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type SermonBlockImageOrderByWithRelationInput = {
    id?: SortOrder
    sermon_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
    sermon_block?: SermonBlockOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type SermonBlockImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SermonBlockImageWhereInput | SermonBlockImageWhereInput[]
    OR?: SermonBlockImageWhereInput[]
    NOT?: SermonBlockImageWhereInput | SermonBlockImageWhereInput[]
    sermon_block_id?: BigIntFilter<"SermonBlockImage"> | bigint | number
    image_id?: BigIntFilter<"SermonBlockImage"> | bigint | number
    order?: BigIntFilter<"SermonBlockImage"> | bigint | number
    sermon_block?: XOR<SermonBlockScalarRelationFilter, SermonBlockWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id">

  export type SermonBlockImageOrderByWithAggregationInput = {
    id?: SortOrder
    sermon_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
    _count?: SermonBlockImageCountOrderByAggregateInput
    _avg?: SermonBlockImageAvgOrderByAggregateInput
    _max?: SermonBlockImageMaxOrderByAggregateInput
    _min?: SermonBlockImageMinOrderByAggregateInput
    _sum?: SermonBlockImageSumOrderByAggregateInput
  }

  export type SermonBlockImageScalarWhereWithAggregatesInput = {
    AND?: SermonBlockImageScalarWhereWithAggregatesInput | SermonBlockImageScalarWhereWithAggregatesInput[]
    OR?: SermonBlockImageScalarWhereWithAggregatesInput[]
    NOT?: SermonBlockImageScalarWhereWithAggregatesInput | SermonBlockImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SermonBlockImage"> | bigint | number
    sermon_block_id?: BigIntWithAggregatesFilter<"SermonBlockImage"> | bigint | number
    image_id?: BigIntWithAggregatesFilter<"SermonBlockImage"> | bigint | number
    order?: BigIntWithAggregatesFilter<"SermonBlockImage"> | bigint | number
  }

  export type NewsCreateInput = {
    id?: bigint | number
    title?: string | null
    is_published: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    news_blocks?: NewsBlockCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: bigint | number
    title?: string | null
    is_published: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    news_blocks?: NewsBlockUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news_blocks?: NewsBlockUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news_blocks?: NewsBlockUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id?: bigint | number
    title?: string | null
    is_published: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type NewsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsBlockCreateInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    news: NewsCreateNestedOneWithoutNews_blocksInput
    news_block_images?: NewsBlockImageCreateNestedManyWithoutNews_blockInput
  }

  export type NewsBlockUncheckedCreateInput = {
    id?: bigint | number
    news_id: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    news_block_images?: NewsBlockImageUncheckedCreateNestedManyWithoutNews_blockInput
  }

  export type NewsBlockUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    news?: NewsUpdateOneRequiredWithoutNews_blocksNestedInput
    news_block_images?: NewsBlockImageUpdateManyWithoutNews_blockNestedInput
  }

  export type NewsBlockUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    news_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    news_block_images?: NewsBlockImageUncheckedUpdateManyWithoutNews_blockNestedInput
  }

  export type NewsBlockCreateManyInput = {
    id?: bigint | number
    news_id: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
  }

  export type NewsBlockUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NewsBlockUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    news_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NewsBlockImageCreateInput = {
    id?: bigint | number
    order: bigint | number
    news_block: NewsBlockCreateNestedOneWithoutNews_block_imagesInput
    image: ImageCreateNestedOneWithoutNewsBlockImagesInput
  }

  export type NewsBlockImageUncheckedCreateInput = {
    id?: bigint | number
    news_block_id: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type NewsBlockImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    news_block?: NewsBlockUpdateOneRequiredWithoutNews_block_imagesNestedInput
    image?: ImageUpdateOneRequiredWithoutNewsBlockImagesNestedInput
  }

  export type NewsBlockImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    news_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NewsBlockImageCreateManyInput = {
    id?: bigint | number
    news_block_id: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type NewsBlockImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NewsBlockImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    news_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ImageCreateInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    NewsBlockImages?: NewsBlockImageCreateNestedManyWithoutImageInput
    SermonsBlockImages?: SermonBlockImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    NewsBlockImages?: NewsBlockImageUncheckedCreateNestedManyWithoutImageInput
    SermonsBlockImages?: SermonBlockImageUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NewsBlockImages?: NewsBlockImageUpdateManyWithoutImageNestedInput
    SermonsBlockImages?: SermonBlockImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NewsBlockImages?: NewsBlockImageUncheckedUpdateManyWithoutImageNestedInput
    SermonsBlockImages?: SermonBlockImageUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SermonCreateInput = {
    id?: bigint | number
    title?: string | null
    preacher_name?: string | null
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    sermon_blocks?: SermonBlockCreateNestedManyWithoutSermonInput
  }

  export type SermonUncheckedCreateInput = {
    id?: bigint | number
    title?: string | null
    preacher_name?: string | null
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    sermon_blocks?: SermonBlockUncheckedCreateNestedManyWithoutSermonInput
  }

  export type SermonUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preacher_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sermon_blocks?: SermonBlockUpdateManyWithoutSermonNestedInput
  }

  export type SermonUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preacher_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sermon_blocks?: SermonBlockUncheckedUpdateManyWithoutSermonNestedInput
  }

  export type SermonCreateManyInput = {
    id?: bigint | number
    title?: string | null
    preacher_name?: string | null
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type SermonUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preacher_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SermonUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preacher_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SermonBlockCreateInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    sermon: SermonCreateNestedOneWithoutSermon_blocksInput
    sermon_block_images?: SermonBlockImageCreateNestedManyWithoutSermon_blockInput
  }

  export type SermonBlockUncheckedCreateInput = {
    id?: bigint | number
    sermon_id: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    sermon_block_images?: SermonBlockImageUncheckedCreateNestedManyWithoutSermon_blockInput
  }

  export type SermonBlockUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon?: SermonUpdateOneRequiredWithoutSermon_blocksNestedInput
    sermon_block_images?: SermonBlockImageUpdateManyWithoutSermon_blockNestedInput
  }

  export type SermonBlockUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_block_images?: SermonBlockImageUncheckedUpdateManyWithoutSermon_blockNestedInput
  }

  export type SermonBlockCreateManyInput = {
    id?: bigint | number
    sermon_id: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
  }

  export type SermonBlockUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SermonBlockUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SermonBlockImageCreateInput = {
    id?: bigint | number
    order: bigint | number
    sermon_block: SermonBlockCreateNestedOneWithoutSermon_block_imagesInput
    image: ImageCreateNestedOneWithoutSermonsBlockImagesInput
  }

  export type SermonBlockImageUncheckedCreateInput = {
    id?: bigint | number
    sermon_block_id: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type SermonBlockImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_block?: SermonBlockUpdateOneRequiredWithoutSermon_block_imagesNestedInput
    image?: ImageUpdateOneRequiredWithoutSermonsBlockImagesNestedInput
  }

  export type SermonBlockImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SermonBlockImageCreateManyInput = {
    id?: bigint | number
    sermon_block_id: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type SermonBlockImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SermonBlockImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NewsBlockListRelationFilter = {
    every?: NewsBlockWhereInput
    some?: NewsBlockWhereInput
    none?: NewsBlockWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NewsScalarRelationFilter = {
    is?: NewsWhereInput
    isNot?: NewsWhereInput
  }

  export type NewsBlockImageListRelationFilter = {
    every?: NewsBlockImageWhereInput
    some?: NewsBlockImageWhereInput
    none?: NewsBlockImageWhereInput
  }

  export type NewsBlockImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsBlockCountOrderByAggregateInput = {
    id?: SortOrder
    news_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    news_id?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    news_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockMinOrderByAggregateInput = {
    id?: SortOrder
    news_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockSumOrderByAggregateInput = {
    id?: SortOrder
    news_id?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockScalarRelationFilter = {
    is?: NewsBlockWhereInput
    isNot?: NewsBlockWhereInput
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type NewsBlockImageCountOrderByAggregateInput = {
    id?: SortOrder
    news_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockImageAvgOrderByAggregateInput = {
    id?: SortOrder
    news_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockImageMaxOrderByAggregateInput = {
    id?: SortOrder
    news_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockImageMinOrderByAggregateInput = {
    id?: SortOrder
    news_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockImageSumOrderByAggregateInput = {
    id?: SortOrder
    news_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
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

  export type SermonBlockImageListRelationFilter = {
    every?: SermonBlockImageWhereInput
    some?: SermonBlockImageWhereInput
    none?: SermonBlockImageWhereInput
  }

  export type SermonBlockImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SermonBlockListRelationFilter = {
    every?: SermonBlockWhereInput
    some?: SermonBlockWhereInput
    none?: SermonBlockWhereInput
  }

  export type SermonBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SermonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    preacher_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type SermonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SermonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    preacher_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type SermonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    preacher_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type SermonSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SermonScalarRelationFilter = {
    is?: SermonWhereInput
    isNot?: SermonWhereInput
  }

  export type SermonBlockCountOrderByAggregateInput = {
    id?: SortOrder
    sermon_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
  }

  export type SermonBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    sermon_id?: SortOrder
    order?: SortOrder
  }

  export type SermonBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    sermon_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
  }

  export type SermonBlockMinOrderByAggregateInput = {
    id?: SortOrder
    sermon_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
  }

  export type SermonBlockSumOrderByAggregateInput = {
    id?: SortOrder
    sermon_id?: SortOrder
    order?: SortOrder
  }

  export type SermonBlockScalarRelationFilter = {
    is?: SermonBlockWhereInput
    isNot?: SermonBlockWhereInput
  }

  export type SermonBlockImageCountOrderByAggregateInput = {
    id?: SortOrder
    sermon_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type SermonBlockImageAvgOrderByAggregateInput = {
    id?: SortOrder
    sermon_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type SermonBlockImageMaxOrderByAggregateInput = {
    id?: SortOrder
    sermon_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type SermonBlockImageMinOrderByAggregateInput = {
    id?: SortOrder
    sermon_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type SermonBlockImageSumOrderByAggregateInput = {
    id?: SortOrder
    sermon_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type NewsBlockCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsBlockCreateWithoutNewsInput, NewsBlockUncheckedCreateWithoutNewsInput> | NewsBlockCreateWithoutNewsInput[] | NewsBlockUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsBlockCreateOrConnectWithoutNewsInput | NewsBlockCreateOrConnectWithoutNewsInput[]
    createMany?: NewsBlockCreateManyNewsInputEnvelope
    connect?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
  }

  export type NewsBlockUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsBlockCreateWithoutNewsInput, NewsBlockUncheckedCreateWithoutNewsInput> | NewsBlockCreateWithoutNewsInput[] | NewsBlockUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsBlockCreateOrConnectWithoutNewsInput | NewsBlockCreateOrConnectWithoutNewsInput[]
    createMany?: NewsBlockCreateManyNewsInputEnvelope
    connect?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NewsBlockUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsBlockCreateWithoutNewsInput, NewsBlockUncheckedCreateWithoutNewsInput> | NewsBlockCreateWithoutNewsInput[] | NewsBlockUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsBlockCreateOrConnectWithoutNewsInput | NewsBlockCreateOrConnectWithoutNewsInput[]
    upsert?: NewsBlockUpsertWithWhereUniqueWithoutNewsInput | NewsBlockUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsBlockCreateManyNewsInputEnvelope
    set?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
    disconnect?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
    delete?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
    connect?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
    update?: NewsBlockUpdateWithWhereUniqueWithoutNewsInput | NewsBlockUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsBlockUpdateManyWithWhereWithoutNewsInput | NewsBlockUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsBlockScalarWhereInput | NewsBlockScalarWhereInput[]
  }

  export type NewsBlockUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsBlockCreateWithoutNewsInput, NewsBlockUncheckedCreateWithoutNewsInput> | NewsBlockCreateWithoutNewsInput[] | NewsBlockUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsBlockCreateOrConnectWithoutNewsInput | NewsBlockCreateOrConnectWithoutNewsInput[]
    upsert?: NewsBlockUpsertWithWhereUniqueWithoutNewsInput | NewsBlockUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsBlockCreateManyNewsInputEnvelope
    set?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
    disconnect?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
    delete?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
    connect?: NewsBlockWhereUniqueInput | NewsBlockWhereUniqueInput[]
    update?: NewsBlockUpdateWithWhereUniqueWithoutNewsInput | NewsBlockUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsBlockUpdateManyWithWhereWithoutNewsInput | NewsBlockUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsBlockScalarWhereInput | NewsBlockScalarWhereInput[]
  }

  export type NewsCreateNestedOneWithoutNews_blocksInput = {
    create?: XOR<NewsCreateWithoutNews_blocksInput, NewsUncheckedCreateWithoutNews_blocksInput>
    connectOrCreate?: NewsCreateOrConnectWithoutNews_blocksInput
    connect?: NewsWhereUniqueInput
  }

  export type NewsBlockImageCreateNestedManyWithoutNews_blockInput = {
    create?: XOR<NewsBlockImageCreateWithoutNews_blockInput, NewsBlockImageUncheckedCreateWithoutNews_blockInput> | NewsBlockImageCreateWithoutNews_blockInput[] | NewsBlockImageUncheckedCreateWithoutNews_blockInput[]
    connectOrCreate?: NewsBlockImageCreateOrConnectWithoutNews_blockInput | NewsBlockImageCreateOrConnectWithoutNews_blockInput[]
    createMany?: NewsBlockImageCreateManyNews_blockInputEnvelope
    connect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
  }

  export type NewsBlockImageUncheckedCreateNestedManyWithoutNews_blockInput = {
    create?: XOR<NewsBlockImageCreateWithoutNews_blockInput, NewsBlockImageUncheckedCreateWithoutNews_blockInput> | NewsBlockImageCreateWithoutNews_blockInput[] | NewsBlockImageUncheckedCreateWithoutNews_blockInput[]
    connectOrCreate?: NewsBlockImageCreateOrConnectWithoutNews_blockInput | NewsBlockImageCreateOrConnectWithoutNews_blockInput[]
    createMany?: NewsBlockImageCreateManyNews_blockInputEnvelope
    connect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
  }

  export type NewsUpdateOneRequiredWithoutNews_blocksNestedInput = {
    create?: XOR<NewsCreateWithoutNews_blocksInput, NewsUncheckedCreateWithoutNews_blocksInput>
    connectOrCreate?: NewsCreateOrConnectWithoutNews_blocksInput
    upsert?: NewsUpsertWithoutNews_blocksInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutNews_blocksInput, NewsUpdateWithoutNews_blocksInput>, NewsUncheckedUpdateWithoutNews_blocksInput>
  }

  export type NewsBlockImageUpdateManyWithoutNews_blockNestedInput = {
    create?: XOR<NewsBlockImageCreateWithoutNews_blockInput, NewsBlockImageUncheckedCreateWithoutNews_blockInput> | NewsBlockImageCreateWithoutNews_blockInput[] | NewsBlockImageUncheckedCreateWithoutNews_blockInput[]
    connectOrCreate?: NewsBlockImageCreateOrConnectWithoutNews_blockInput | NewsBlockImageCreateOrConnectWithoutNews_blockInput[]
    upsert?: NewsBlockImageUpsertWithWhereUniqueWithoutNews_blockInput | NewsBlockImageUpsertWithWhereUniqueWithoutNews_blockInput[]
    createMany?: NewsBlockImageCreateManyNews_blockInputEnvelope
    set?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    disconnect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    delete?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    connect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    update?: NewsBlockImageUpdateWithWhereUniqueWithoutNews_blockInput | NewsBlockImageUpdateWithWhereUniqueWithoutNews_blockInput[]
    updateMany?: NewsBlockImageUpdateManyWithWhereWithoutNews_blockInput | NewsBlockImageUpdateManyWithWhereWithoutNews_blockInput[]
    deleteMany?: NewsBlockImageScalarWhereInput | NewsBlockImageScalarWhereInput[]
  }

  export type NewsBlockImageUncheckedUpdateManyWithoutNews_blockNestedInput = {
    create?: XOR<NewsBlockImageCreateWithoutNews_blockInput, NewsBlockImageUncheckedCreateWithoutNews_blockInput> | NewsBlockImageCreateWithoutNews_blockInput[] | NewsBlockImageUncheckedCreateWithoutNews_blockInput[]
    connectOrCreate?: NewsBlockImageCreateOrConnectWithoutNews_blockInput | NewsBlockImageCreateOrConnectWithoutNews_blockInput[]
    upsert?: NewsBlockImageUpsertWithWhereUniqueWithoutNews_blockInput | NewsBlockImageUpsertWithWhereUniqueWithoutNews_blockInput[]
    createMany?: NewsBlockImageCreateManyNews_blockInputEnvelope
    set?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    disconnect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    delete?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    connect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    update?: NewsBlockImageUpdateWithWhereUniqueWithoutNews_blockInput | NewsBlockImageUpdateWithWhereUniqueWithoutNews_blockInput[]
    updateMany?: NewsBlockImageUpdateManyWithWhereWithoutNews_blockInput | NewsBlockImageUpdateManyWithWhereWithoutNews_blockInput[]
    deleteMany?: NewsBlockImageScalarWhereInput | NewsBlockImageScalarWhereInput[]
  }

  export type NewsBlockCreateNestedOneWithoutNews_block_imagesInput = {
    create?: XOR<NewsBlockCreateWithoutNews_block_imagesInput, NewsBlockUncheckedCreateWithoutNews_block_imagesInput>
    connectOrCreate?: NewsBlockCreateOrConnectWithoutNews_block_imagesInput
    connect?: NewsBlockWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutNewsBlockImagesInput = {
    create?: XOR<ImageCreateWithoutNewsBlockImagesInput, ImageUncheckedCreateWithoutNewsBlockImagesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutNewsBlockImagesInput
    connect?: ImageWhereUniqueInput
  }

  export type NewsBlockUpdateOneRequiredWithoutNews_block_imagesNestedInput = {
    create?: XOR<NewsBlockCreateWithoutNews_block_imagesInput, NewsBlockUncheckedCreateWithoutNews_block_imagesInput>
    connectOrCreate?: NewsBlockCreateOrConnectWithoutNews_block_imagesInput
    upsert?: NewsBlockUpsertWithoutNews_block_imagesInput
    connect?: NewsBlockWhereUniqueInput
    update?: XOR<XOR<NewsBlockUpdateToOneWithWhereWithoutNews_block_imagesInput, NewsBlockUpdateWithoutNews_block_imagesInput>, NewsBlockUncheckedUpdateWithoutNews_block_imagesInput>
  }

  export type ImageUpdateOneRequiredWithoutNewsBlockImagesNestedInput = {
    create?: XOR<ImageCreateWithoutNewsBlockImagesInput, ImageUncheckedCreateWithoutNewsBlockImagesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutNewsBlockImagesInput
    upsert?: ImageUpsertWithoutNewsBlockImagesInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutNewsBlockImagesInput, ImageUpdateWithoutNewsBlockImagesInput>, ImageUncheckedUpdateWithoutNewsBlockImagesInput>
  }

  export type NewsBlockImageCreateNestedManyWithoutImageInput = {
    create?: XOR<NewsBlockImageCreateWithoutImageInput, NewsBlockImageUncheckedCreateWithoutImageInput> | NewsBlockImageCreateWithoutImageInput[] | NewsBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: NewsBlockImageCreateOrConnectWithoutImageInput | NewsBlockImageCreateOrConnectWithoutImageInput[]
    createMany?: NewsBlockImageCreateManyImageInputEnvelope
    connect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
  }

  export type SermonBlockImageCreateNestedManyWithoutImageInput = {
    create?: XOR<SermonBlockImageCreateWithoutImageInput, SermonBlockImageUncheckedCreateWithoutImageInput> | SermonBlockImageCreateWithoutImageInput[] | SermonBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: SermonBlockImageCreateOrConnectWithoutImageInput | SermonBlockImageCreateOrConnectWithoutImageInput[]
    createMany?: SermonBlockImageCreateManyImageInputEnvelope
    connect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
  }

  export type NewsBlockImageUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<NewsBlockImageCreateWithoutImageInput, NewsBlockImageUncheckedCreateWithoutImageInput> | NewsBlockImageCreateWithoutImageInput[] | NewsBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: NewsBlockImageCreateOrConnectWithoutImageInput | NewsBlockImageCreateOrConnectWithoutImageInput[]
    createMany?: NewsBlockImageCreateManyImageInputEnvelope
    connect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
  }

  export type SermonBlockImageUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<SermonBlockImageCreateWithoutImageInput, SermonBlockImageUncheckedCreateWithoutImageInput> | SermonBlockImageCreateWithoutImageInput[] | SermonBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: SermonBlockImageCreateOrConnectWithoutImageInput | SermonBlockImageCreateOrConnectWithoutImageInput[]
    createMany?: SermonBlockImageCreateManyImageInputEnvelope
    connect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NewsBlockImageUpdateManyWithoutImageNestedInput = {
    create?: XOR<NewsBlockImageCreateWithoutImageInput, NewsBlockImageUncheckedCreateWithoutImageInput> | NewsBlockImageCreateWithoutImageInput[] | NewsBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: NewsBlockImageCreateOrConnectWithoutImageInput | NewsBlockImageCreateOrConnectWithoutImageInput[]
    upsert?: NewsBlockImageUpsertWithWhereUniqueWithoutImageInput | NewsBlockImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: NewsBlockImageCreateManyImageInputEnvelope
    set?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    disconnect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    delete?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    connect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    update?: NewsBlockImageUpdateWithWhereUniqueWithoutImageInput | NewsBlockImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: NewsBlockImageUpdateManyWithWhereWithoutImageInput | NewsBlockImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: NewsBlockImageScalarWhereInput | NewsBlockImageScalarWhereInput[]
  }

  export type SermonBlockImageUpdateManyWithoutImageNestedInput = {
    create?: XOR<SermonBlockImageCreateWithoutImageInput, SermonBlockImageUncheckedCreateWithoutImageInput> | SermonBlockImageCreateWithoutImageInput[] | SermonBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: SermonBlockImageCreateOrConnectWithoutImageInput | SermonBlockImageCreateOrConnectWithoutImageInput[]
    upsert?: SermonBlockImageUpsertWithWhereUniqueWithoutImageInput | SermonBlockImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: SermonBlockImageCreateManyImageInputEnvelope
    set?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    disconnect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    delete?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    connect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    update?: SermonBlockImageUpdateWithWhereUniqueWithoutImageInput | SermonBlockImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: SermonBlockImageUpdateManyWithWhereWithoutImageInput | SermonBlockImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: SermonBlockImageScalarWhereInput | SermonBlockImageScalarWhereInput[]
  }

  export type NewsBlockImageUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<NewsBlockImageCreateWithoutImageInput, NewsBlockImageUncheckedCreateWithoutImageInput> | NewsBlockImageCreateWithoutImageInput[] | NewsBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: NewsBlockImageCreateOrConnectWithoutImageInput | NewsBlockImageCreateOrConnectWithoutImageInput[]
    upsert?: NewsBlockImageUpsertWithWhereUniqueWithoutImageInput | NewsBlockImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: NewsBlockImageCreateManyImageInputEnvelope
    set?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    disconnect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    delete?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    connect?: NewsBlockImageWhereUniqueInput | NewsBlockImageWhereUniqueInput[]
    update?: NewsBlockImageUpdateWithWhereUniqueWithoutImageInput | NewsBlockImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: NewsBlockImageUpdateManyWithWhereWithoutImageInput | NewsBlockImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: NewsBlockImageScalarWhereInput | NewsBlockImageScalarWhereInput[]
  }

  export type SermonBlockImageUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<SermonBlockImageCreateWithoutImageInput, SermonBlockImageUncheckedCreateWithoutImageInput> | SermonBlockImageCreateWithoutImageInput[] | SermonBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: SermonBlockImageCreateOrConnectWithoutImageInput | SermonBlockImageCreateOrConnectWithoutImageInput[]
    upsert?: SermonBlockImageUpsertWithWhereUniqueWithoutImageInput | SermonBlockImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: SermonBlockImageCreateManyImageInputEnvelope
    set?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    disconnect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    delete?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    connect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    update?: SermonBlockImageUpdateWithWhereUniqueWithoutImageInput | SermonBlockImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: SermonBlockImageUpdateManyWithWhereWithoutImageInput | SermonBlockImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: SermonBlockImageScalarWhereInput | SermonBlockImageScalarWhereInput[]
  }

  export type SermonBlockCreateNestedManyWithoutSermonInput = {
    create?: XOR<SermonBlockCreateWithoutSermonInput, SermonBlockUncheckedCreateWithoutSermonInput> | SermonBlockCreateWithoutSermonInput[] | SermonBlockUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: SermonBlockCreateOrConnectWithoutSermonInput | SermonBlockCreateOrConnectWithoutSermonInput[]
    createMany?: SermonBlockCreateManySermonInputEnvelope
    connect?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
  }

  export type SermonBlockUncheckedCreateNestedManyWithoutSermonInput = {
    create?: XOR<SermonBlockCreateWithoutSermonInput, SermonBlockUncheckedCreateWithoutSermonInput> | SermonBlockCreateWithoutSermonInput[] | SermonBlockUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: SermonBlockCreateOrConnectWithoutSermonInput | SermonBlockCreateOrConnectWithoutSermonInput[]
    createMany?: SermonBlockCreateManySermonInputEnvelope
    connect?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
  }

  export type SermonBlockUpdateManyWithoutSermonNestedInput = {
    create?: XOR<SermonBlockCreateWithoutSermonInput, SermonBlockUncheckedCreateWithoutSermonInput> | SermonBlockCreateWithoutSermonInput[] | SermonBlockUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: SermonBlockCreateOrConnectWithoutSermonInput | SermonBlockCreateOrConnectWithoutSermonInput[]
    upsert?: SermonBlockUpsertWithWhereUniqueWithoutSermonInput | SermonBlockUpsertWithWhereUniqueWithoutSermonInput[]
    createMany?: SermonBlockCreateManySermonInputEnvelope
    set?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
    disconnect?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
    delete?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
    connect?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
    update?: SermonBlockUpdateWithWhereUniqueWithoutSermonInput | SermonBlockUpdateWithWhereUniqueWithoutSermonInput[]
    updateMany?: SermonBlockUpdateManyWithWhereWithoutSermonInput | SermonBlockUpdateManyWithWhereWithoutSermonInput[]
    deleteMany?: SermonBlockScalarWhereInput | SermonBlockScalarWhereInput[]
  }

  export type SermonBlockUncheckedUpdateManyWithoutSermonNestedInput = {
    create?: XOR<SermonBlockCreateWithoutSermonInput, SermonBlockUncheckedCreateWithoutSermonInput> | SermonBlockCreateWithoutSermonInput[] | SermonBlockUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: SermonBlockCreateOrConnectWithoutSermonInput | SermonBlockCreateOrConnectWithoutSermonInput[]
    upsert?: SermonBlockUpsertWithWhereUniqueWithoutSermonInput | SermonBlockUpsertWithWhereUniqueWithoutSermonInput[]
    createMany?: SermonBlockCreateManySermonInputEnvelope
    set?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
    disconnect?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
    delete?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
    connect?: SermonBlockWhereUniqueInput | SermonBlockWhereUniqueInput[]
    update?: SermonBlockUpdateWithWhereUniqueWithoutSermonInput | SermonBlockUpdateWithWhereUniqueWithoutSermonInput[]
    updateMany?: SermonBlockUpdateManyWithWhereWithoutSermonInput | SermonBlockUpdateManyWithWhereWithoutSermonInput[]
    deleteMany?: SermonBlockScalarWhereInput | SermonBlockScalarWhereInput[]
  }

  export type SermonCreateNestedOneWithoutSermon_blocksInput = {
    create?: XOR<SermonCreateWithoutSermon_blocksInput, SermonUncheckedCreateWithoutSermon_blocksInput>
    connectOrCreate?: SermonCreateOrConnectWithoutSermon_blocksInput
    connect?: SermonWhereUniqueInput
  }

  export type SermonBlockImageCreateNestedManyWithoutSermon_blockInput = {
    create?: XOR<SermonBlockImageCreateWithoutSermon_blockInput, SermonBlockImageUncheckedCreateWithoutSermon_blockInput> | SermonBlockImageCreateWithoutSermon_blockInput[] | SermonBlockImageUncheckedCreateWithoutSermon_blockInput[]
    connectOrCreate?: SermonBlockImageCreateOrConnectWithoutSermon_blockInput | SermonBlockImageCreateOrConnectWithoutSermon_blockInput[]
    createMany?: SermonBlockImageCreateManySermon_blockInputEnvelope
    connect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
  }

  export type SermonBlockImageUncheckedCreateNestedManyWithoutSermon_blockInput = {
    create?: XOR<SermonBlockImageCreateWithoutSermon_blockInput, SermonBlockImageUncheckedCreateWithoutSermon_blockInput> | SermonBlockImageCreateWithoutSermon_blockInput[] | SermonBlockImageUncheckedCreateWithoutSermon_blockInput[]
    connectOrCreate?: SermonBlockImageCreateOrConnectWithoutSermon_blockInput | SermonBlockImageCreateOrConnectWithoutSermon_blockInput[]
    createMany?: SermonBlockImageCreateManySermon_blockInputEnvelope
    connect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
  }

  export type SermonUpdateOneRequiredWithoutSermon_blocksNestedInput = {
    create?: XOR<SermonCreateWithoutSermon_blocksInput, SermonUncheckedCreateWithoutSermon_blocksInput>
    connectOrCreate?: SermonCreateOrConnectWithoutSermon_blocksInput
    upsert?: SermonUpsertWithoutSermon_blocksInput
    connect?: SermonWhereUniqueInput
    update?: XOR<XOR<SermonUpdateToOneWithWhereWithoutSermon_blocksInput, SermonUpdateWithoutSermon_blocksInput>, SermonUncheckedUpdateWithoutSermon_blocksInput>
  }

  export type SermonBlockImageUpdateManyWithoutSermon_blockNestedInput = {
    create?: XOR<SermonBlockImageCreateWithoutSermon_blockInput, SermonBlockImageUncheckedCreateWithoutSermon_blockInput> | SermonBlockImageCreateWithoutSermon_blockInput[] | SermonBlockImageUncheckedCreateWithoutSermon_blockInput[]
    connectOrCreate?: SermonBlockImageCreateOrConnectWithoutSermon_blockInput | SermonBlockImageCreateOrConnectWithoutSermon_blockInput[]
    upsert?: SermonBlockImageUpsertWithWhereUniqueWithoutSermon_blockInput | SermonBlockImageUpsertWithWhereUniqueWithoutSermon_blockInput[]
    createMany?: SermonBlockImageCreateManySermon_blockInputEnvelope
    set?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    disconnect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    delete?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    connect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    update?: SermonBlockImageUpdateWithWhereUniqueWithoutSermon_blockInput | SermonBlockImageUpdateWithWhereUniqueWithoutSermon_blockInput[]
    updateMany?: SermonBlockImageUpdateManyWithWhereWithoutSermon_blockInput | SermonBlockImageUpdateManyWithWhereWithoutSermon_blockInput[]
    deleteMany?: SermonBlockImageScalarWhereInput | SermonBlockImageScalarWhereInput[]
  }

  export type SermonBlockImageUncheckedUpdateManyWithoutSermon_blockNestedInput = {
    create?: XOR<SermonBlockImageCreateWithoutSermon_blockInput, SermonBlockImageUncheckedCreateWithoutSermon_blockInput> | SermonBlockImageCreateWithoutSermon_blockInput[] | SermonBlockImageUncheckedCreateWithoutSermon_blockInput[]
    connectOrCreate?: SermonBlockImageCreateOrConnectWithoutSermon_blockInput | SermonBlockImageCreateOrConnectWithoutSermon_blockInput[]
    upsert?: SermonBlockImageUpsertWithWhereUniqueWithoutSermon_blockInput | SermonBlockImageUpsertWithWhereUniqueWithoutSermon_blockInput[]
    createMany?: SermonBlockImageCreateManySermon_blockInputEnvelope
    set?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    disconnect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    delete?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    connect?: SermonBlockImageWhereUniqueInput | SermonBlockImageWhereUniqueInput[]
    update?: SermonBlockImageUpdateWithWhereUniqueWithoutSermon_blockInput | SermonBlockImageUpdateWithWhereUniqueWithoutSermon_blockInput[]
    updateMany?: SermonBlockImageUpdateManyWithWhereWithoutSermon_blockInput | SermonBlockImageUpdateManyWithWhereWithoutSermon_blockInput[]
    deleteMany?: SermonBlockImageScalarWhereInput | SermonBlockImageScalarWhereInput[]
  }

  export type SermonBlockCreateNestedOneWithoutSermon_block_imagesInput = {
    create?: XOR<SermonBlockCreateWithoutSermon_block_imagesInput, SermonBlockUncheckedCreateWithoutSermon_block_imagesInput>
    connectOrCreate?: SermonBlockCreateOrConnectWithoutSermon_block_imagesInput
    connect?: SermonBlockWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutSermonsBlockImagesInput = {
    create?: XOR<ImageCreateWithoutSermonsBlockImagesInput, ImageUncheckedCreateWithoutSermonsBlockImagesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutSermonsBlockImagesInput
    connect?: ImageWhereUniqueInput
  }

  export type SermonBlockUpdateOneRequiredWithoutSermon_block_imagesNestedInput = {
    create?: XOR<SermonBlockCreateWithoutSermon_block_imagesInput, SermonBlockUncheckedCreateWithoutSermon_block_imagesInput>
    connectOrCreate?: SermonBlockCreateOrConnectWithoutSermon_block_imagesInput
    upsert?: SermonBlockUpsertWithoutSermon_block_imagesInput
    connect?: SermonBlockWhereUniqueInput
    update?: XOR<XOR<SermonBlockUpdateToOneWithWhereWithoutSermon_block_imagesInput, SermonBlockUpdateWithoutSermon_block_imagesInput>, SermonBlockUncheckedUpdateWithoutSermon_block_imagesInput>
  }

  export type ImageUpdateOneRequiredWithoutSermonsBlockImagesNestedInput = {
    create?: XOR<ImageCreateWithoutSermonsBlockImagesInput, ImageUncheckedCreateWithoutSermonsBlockImagesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutSermonsBlockImagesInput
    upsert?: ImageUpsertWithoutSermonsBlockImagesInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutSermonsBlockImagesInput, ImageUpdateWithoutSermonsBlockImagesInput>, ImageUncheckedUpdateWithoutSermonsBlockImagesInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NewsBlockCreateWithoutNewsInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    news_block_images?: NewsBlockImageCreateNestedManyWithoutNews_blockInput
  }

  export type NewsBlockUncheckedCreateWithoutNewsInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    news_block_images?: NewsBlockImageUncheckedCreateNestedManyWithoutNews_blockInput
  }

  export type NewsBlockCreateOrConnectWithoutNewsInput = {
    where: NewsBlockWhereUniqueInput
    create: XOR<NewsBlockCreateWithoutNewsInput, NewsBlockUncheckedCreateWithoutNewsInput>
  }

  export type NewsBlockCreateManyNewsInputEnvelope = {
    data: NewsBlockCreateManyNewsInput | NewsBlockCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type NewsBlockUpsertWithWhereUniqueWithoutNewsInput = {
    where: NewsBlockWhereUniqueInput
    update: XOR<NewsBlockUpdateWithoutNewsInput, NewsBlockUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsBlockCreateWithoutNewsInput, NewsBlockUncheckedCreateWithoutNewsInput>
  }

  export type NewsBlockUpdateWithWhereUniqueWithoutNewsInput = {
    where: NewsBlockWhereUniqueInput
    data: XOR<NewsBlockUpdateWithoutNewsInput, NewsBlockUncheckedUpdateWithoutNewsInput>
  }

  export type NewsBlockUpdateManyWithWhereWithoutNewsInput = {
    where: NewsBlockScalarWhereInput
    data: XOR<NewsBlockUpdateManyMutationInput, NewsBlockUncheckedUpdateManyWithoutNewsInput>
  }

  export type NewsBlockScalarWhereInput = {
    AND?: NewsBlockScalarWhereInput | NewsBlockScalarWhereInput[]
    OR?: NewsBlockScalarWhereInput[]
    NOT?: NewsBlockScalarWhereInput | NewsBlockScalarWhereInput[]
    id?: BigIntFilter<"NewsBlock"> | bigint | number
    news_id?: BigIntFilter<"NewsBlock"> | bigint | number
    title?: StringNullableFilter<"NewsBlock"> | string | null
    content?: StringNullableFilter<"NewsBlock"> | string | null
    order?: BigIntFilter<"NewsBlock"> | bigint | number
  }

  export type NewsCreateWithoutNews_blocksInput = {
    id?: bigint | number
    title?: string | null
    is_published: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type NewsUncheckedCreateWithoutNews_blocksInput = {
    id?: bigint | number
    title?: string | null
    is_published: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type NewsCreateOrConnectWithoutNews_blocksInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutNews_blocksInput, NewsUncheckedCreateWithoutNews_blocksInput>
  }

  export type NewsBlockImageCreateWithoutNews_blockInput = {
    id?: bigint | number
    order: bigint | number
    image: ImageCreateNestedOneWithoutNewsBlockImagesInput
  }

  export type NewsBlockImageUncheckedCreateWithoutNews_blockInput = {
    id?: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type NewsBlockImageCreateOrConnectWithoutNews_blockInput = {
    where: NewsBlockImageWhereUniqueInput
    create: XOR<NewsBlockImageCreateWithoutNews_blockInput, NewsBlockImageUncheckedCreateWithoutNews_blockInput>
  }

  export type NewsBlockImageCreateManyNews_blockInputEnvelope = {
    data: NewsBlockImageCreateManyNews_blockInput | NewsBlockImageCreateManyNews_blockInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithoutNews_blocksInput = {
    update: XOR<NewsUpdateWithoutNews_blocksInput, NewsUncheckedUpdateWithoutNews_blocksInput>
    create: XOR<NewsCreateWithoutNews_blocksInput, NewsUncheckedCreateWithoutNews_blocksInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutNews_blocksInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutNews_blocksInput, NewsUncheckedUpdateWithoutNews_blocksInput>
  }

  export type NewsUpdateWithoutNews_blocksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsUncheckedUpdateWithoutNews_blocksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsBlockImageUpsertWithWhereUniqueWithoutNews_blockInput = {
    where: NewsBlockImageWhereUniqueInput
    update: XOR<NewsBlockImageUpdateWithoutNews_blockInput, NewsBlockImageUncheckedUpdateWithoutNews_blockInput>
    create: XOR<NewsBlockImageCreateWithoutNews_blockInput, NewsBlockImageUncheckedCreateWithoutNews_blockInput>
  }

  export type NewsBlockImageUpdateWithWhereUniqueWithoutNews_blockInput = {
    where: NewsBlockImageWhereUniqueInput
    data: XOR<NewsBlockImageUpdateWithoutNews_blockInput, NewsBlockImageUncheckedUpdateWithoutNews_blockInput>
  }

  export type NewsBlockImageUpdateManyWithWhereWithoutNews_blockInput = {
    where: NewsBlockImageScalarWhereInput
    data: XOR<NewsBlockImageUpdateManyMutationInput, NewsBlockImageUncheckedUpdateManyWithoutNews_blockInput>
  }

  export type NewsBlockImageScalarWhereInput = {
    AND?: NewsBlockImageScalarWhereInput | NewsBlockImageScalarWhereInput[]
    OR?: NewsBlockImageScalarWhereInput[]
    NOT?: NewsBlockImageScalarWhereInput | NewsBlockImageScalarWhereInput[]
    id?: BigIntFilter<"NewsBlockImage"> | bigint | number
    news_block_id?: BigIntFilter<"NewsBlockImage"> | bigint | number
    image_id?: BigIntFilter<"NewsBlockImage"> | bigint | number
    order?: BigIntFilter<"NewsBlockImage"> | bigint | number
  }

  export type NewsBlockCreateWithoutNews_block_imagesInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    news: NewsCreateNestedOneWithoutNews_blocksInput
  }

  export type NewsBlockUncheckedCreateWithoutNews_block_imagesInput = {
    id?: bigint | number
    news_id: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
  }

  export type NewsBlockCreateOrConnectWithoutNews_block_imagesInput = {
    where: NewsBlockWhereUniqueInput
    create: XOR<NewsBlockCreateWithoutNews_block_imagesInput, NewsBlockUncheckedCreateWithoutNews_block_imagesInput>
  }

  export type ImageCreateWithoutNewsBlockImagesInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    SermonsBlockImages?: SermonBlockImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutNewsBlockImagesInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    SermonsBlockImages?: SermonBlockImageUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutNewsBlockImagesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutNewsBlockImagesInput, ImageUncheckedCreateWithoutNewsBlockImagesInput>
  }

  export type NewsBlockUpsertWithoutNews_block_imagesInput = {
    update: XOR<NewsBlockUpdateWithoutNews_block_imagesInput, NewsBlockUncheckedUpdateWithoutNews_block_imagesInput>
    create: XOR<NewsBlockCreateWithoutNews_block_imagesInput, NewsBlockUncheckedCreateWithoutNews_block_imagesInput>
    where?: NewsBlockWhereInput
  }

  export type NewsBlockUpdateToOneWithWhereWithoutNews_block_imagesInput = {
    where?: NewsBlockWhereInput
    data: XOR<NewsBlockUpdateWithoutNews_block_imagesInput, NewsBlockUncheckedUpdateWithoutNews_block_imagesInput>
  }

  export type NewsBlockUpdateWithoutNews_block_imagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    news?: NewsUpdateOneRequiredWithoutNews_blocksNestedInput
  }

  export type NewsBlockUncheckedUpdateWithoutNews_block_imagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    news_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ImageUpsertWithoutNewsBlockImagesInput = {
    update: XOR<ImageUpdateWithoutNewsBlockImagesInput, ImageUncheckedUpdateWithoutNewsBlockImagesInput>
    create: XOR<ImageCreateWithoutNewsBlockImagesInput, ImageUncheckedCreateWithoutNewsBlockImagesInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutNewsBlockImagesInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutNewsBlockImagesInput, ImageUncheckedUpdateWithoutNewsBlockImagesInput>
  }

  export type ImageUpdateWithoutNewsBlockImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SermonsBlockImages?: SermonBlockImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutNewsBlockImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SermonsBlockImages?: SermonBlockImageUncheckedUpdateManyWithoutImageNestedInput
  }

  export type NewsBlockImageCreateWithoutImageInput = {
    id?: bigint | number
    order: bigint | number
    news_block: NewsBlockCreateNestedOneWithoutNews_block_imagesInput
  }

  export type NewsBlockImageUncheckedCreateWithoutImageInput = {
    id?: bigint | number
    news_block_id: bigint | number
    order: bigint | number
  }

  export type NewsBlockImageCreateOrConnectWithoutImageInput = {
    where: NewsBlockImageWhereUniqueInput
    create: XOR<NewsBlockImageCreateWithoutImageInput, NewsBlockImageUncheckedCreateWithoutImageInput>
  }

  export type NewsBlockImageCreateManyImageInputEnvelope = {
    data: NewsBlockImageCreateManyImageInput | NewsBlockImageCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type SermonBlockImageCreateWithoutImageInput = {
    id?: bigint | number
    order: bigint | number
    sermon_block: SermonBlockCreateNestedOneWithoutSermon_block_imagesInput
  }

  export type SermonBlockImageUncheckedCreateWithoutImageInput = {
    id?: bigint | number
    sermon_block_id: bigint | number
    order: bigint | number
  }

  export type SermonBlockImageCreateOrConnectWithoutImageInput = {
    where: SermonBlockImageWhereUniqueInput
    create: XOR<SermonBlockImageCreateWithoutImageInput, SermonBlockImageUncheckedCreateWithoutImageInput>
  }

  export type SermonBlockImageCreateManyImageInputEnvelope = {
    data: SermonBlockImageCreateManyImageInput | SermonBlockImageCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type NewsBlockImageUpsertWithWhereUniqueWithoutImageInput = {
    where: NewsBlockImageWhereUniqueInput
    update: XOR<NewsBlockImageUpdateWithoutImageInput, NewsBlockImageUncheckedUpdateWithoutImageInput>
    create: XOR<NewsBlockImageCreateWithoutImageInput, NewsBlockImageUncheckedCreateWithoutImageInput>
  }

  export type NewsBlockImageUpdateWithWhereUniqueWithoutImageInput = {
    where: NewsBlockImageWhereUniqueInput
    data: XOR<NewsBlockImageUpdateWithoutImageInput, NewsBlockImageUncheckedUpdateWithoutImageInput>
  }

  export type NewsBlockImageUpdateManyWithWhereWithoutImageInput = {
    where: NewsBlockImageScalarWhereInput
    data: XOR<NewsBlockImageUpdateManyMutationInput, NewsBlockImageUncheckedUpdateManyWithoutImageInput>
  }

  export type SermonBlockImageUpsertWithWhereUniqueWithoutImageInput = {
    where: SermonBlockImageWhereUniqueInput
    update: XOR<SermonBlockImageUpdateWithoutImageInput, SermonBlockImageUncheckedUpdateWithoutImageInput>
    create: XOR<SermonBlockImageCreateWithoutImageInput, SermonBlockImageUncheckedCreateWithoutImageInput>
  }

  export type SermonBlockImageUpdateWithWhereUniqueWithoutImageInput = {
    where: SermonBlockImageWhereUniqueInput
    data: XOR<SermonBlockImageUpdateWithoutImageInput, SermonBlockImageUncheckedUpdateWithoutImageInput>
  }

  export type SermonBlockImageUpdateManyWithWhereWithoutImageInput = {
    where: SermonBlockImageScalarWhereInput
    data: XOR<SermonBlockImageUpdateManyMutationInput, SermonBlockImageUncheckedUpdateManyWithoutImageInput>
  }

  export type SermonBlockImageScalarWhereInput = {
    AND?: SermonBlockImageScalarWhereInput | SermonBlockImageScalarWhereInput[]
    OR?: SermonBlockImageScalarWhereInput[]
    NOT?: SermonBlockImageScalarWhereInput | SermonBlockImageScalarWhereInput[]
    id?: BigIntFilter<"SermonBlockImage"> | bigint | number
    sermon_block_id?: BigIntFilter<"SermonBlockImage"> | bigint | number
    image_id?: BigIntFilter<"SermonBlockImage"> | bigint | number
    order?: BigIntFilter<"SermonBlockImage"> | bigint | number
  }

  export type SermonBlockCreateWithoutSermonInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    sermon_block_images?: SermonBlockImageCreateNestedManyWithoutSermon_blockInput
  }

  export type SermonBlockUncheckedCreateWithoutSermonInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    sermon_block_images?: SermonBlockImageUncheckedCreateNestedManyWithoutSermon_blockInput
  }

  export type SermonBlockCreateOrConnectWithoutSermonInput = {
    where: SermonBlockWhereUniqueInput
    create: XOR<SermonBlockCreateWithoutSermonInput, SermonBlockUncheckedCreateWithoutSermonInput>
  }

  export type SermonBlockCreateManySermonInputEnvelope = {
    data: SermonBlockCreateManySermonInput | SermonBlockCreateManySermonInput[]
    skipDuplicates?: boolean
  }

  export type SermonBlockUpsertWithWhereUniqueWithoutSermonInput = {
    where: SermonBlockWhereUniqueInput
    update: XOR<SermonBlockUpdateWithoutSermonInput, SermonBlockUncheckedUpdateWithoutSermonInput>
    create: XOR<SermonBlockCreateWithoutSermonInput, SermonBlockUncheckedCreateWithoutSermonInput>
  }

  export type SermonBlockUpdateWithWhereUniqueWithoutSermonInput = {
    where: SermonBlockWhereUniqueInput
    data: XOR<SermonBlockUpdateWithoutSermonInput, SermonBlockUncheckedUpdateWithoutSermonInput>
  }

  export type SermonBlockUpdateManyWithWhereWithoutSermonInput = {
    where: SermonBlockScalarWhereInput
    data: XOR<SermonBlockUpdateManyMutationInput, SermonBlockUncheckedUpdateManyWithoutSermonInput>
  }

  export type SermonBlockScalarWhereInput = {
    AND?: SermonBlockScalarWhereInput | SermonBlockScalarWhereInput[]
    OR?: SermonBlockScalarWhereInput[]
    NOT?: SermonBlockScalarWhereInput | SermonBlockScalarWhereInput[]
    id?: BigIntFilter<"SermonBlock"> | bigint | number
    sermon_id?: BigIntFilter<"SermonBlock"> | bigint | number
    title?: StringNullableFilter<"SermonBlock"> | string | null
    content?: StringNullableFilter<"SermonBlock"> | string | null
    order?: BigIntFilter<"SermonBlock"> | bigint | number
  }

  export type SermonCreateWithoutSermon_blocksInput = {
    id?: bigint | number
    title?: string | null
    preacher_name?: string | null
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type SermonUncheckedCreateWithoutSermon_blocksInput = {
    id?: bigint | number
    title?: string | null
    preacher_name?: string | null
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type SermonCreateOrConnectWithoutSermon_blocksInput = {
    where: SermonWhereUniqueInput
    create: XOR<SermonCreateWithoutSermon_blocksInput, SermonUncheckedCreateWithoutSermon_blocksInput>
  }

  export type SermonBlockImageCreateWithoutSermon_blockInput = {
    id?: bigint | number
    order: bigint | number
    image: ImageCreateNestedOneWithoutSermonsBlockImagesInput
  }

  export type SermonBlockImageUncheckedCreateWithoutSermon_blockInput = {
    id?: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type SermonBlockImageCreateOrConnectWithoutSermon_blockInput = {
    where: SermonBlockImageWhereUniqueInput
    create: XOR<SermonBlockImageCreateWithoutSermon_blockInput, SermonBlockImageUncheckedCreateWithoutSermon_blockInput>
  }

  export type SermonBlockImageCreateManySermon_blockInputEnvelope = {
    data: SermonBlockImageCreateManySermon_blockInput | SermonBlockImageCreateManySermon_blockInput[]
    skipDuplicates?: boolean
  }

  export type SermonUpsertWithoutSermon_blocksInput = {
    update: XOR<SermonUpdateWithoutSermon_blocksInput, SermonUncheckedUpdateWithoutSermon_blocksInput>
    create: XOR<SermonCreateWithoutSermon_blocksInput, SermonUncheckedCreateWithoutSermon_blocksInput>
    where?: SermonWhereInput
  }

  export type SermonUpdateToOneWithWhereWithoutSermon_blocksInput = {
    where?: SermonWhereInput
    data: XOR<SermonUpdateWithoutSermon_blocksInput, SermonUncheckedUpdateWithoutSermon_blocksInput>
  }

  export type SermonUpdateWithoutSermon_blocksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preacher_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SermonUncheckedUpdateWithoutSermon_blocksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    preacher_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SermonBlockImageUpsertWithWhereUniqueWithoutSermon_blockInput = {
    where: SermonBlockImageWhereUniqueInput
    update: XOR<SermonBlockImageUpdateWithoutSermon_blockInput, SermonBlockImageUncheckedUpdateWithoutSermon_blockInput>
    create: XOR<SermonBlockImageCreateWithoutSermon_blockInput, SermonBlockImageUncheckedCreateWithoutSermon_blockInput>
  }

  export type SermonBlockImageUpdateWithWhereUniqueWithoutSermon_blockInput = {
    where: SermonBlockImageWhereUniqueInput
    data: XOR<SermonBlockImageUpdateWithoutSermon_blockInput, SermonBlockImageUncheckedUpdateWithoutSermon_blockInput>
  }

  export type SermonBlockImageUpdateManyWithWhereWithoutSermon_blockInput = {
    where: SermonBlockImageScalarWhereInput
    data: XOR<SermonBlockImageUpdateManyMutationInput, SermonBlockImageUncheckedUpdateManyWithoutSermon_blockInput>
  }

  export type SermonBlockCreateWithoutSermon_block_imagesInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
    sermon: SermonCreateNestedOneWithoutSermon_blocksInput
  }

  export type SermonBlockUncheckedCreateWithoutSermon_block_imagesInput = {
    id?: bigint | number
    sermon_id: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
  }

  export type SermonBlockCreateOrConnectWithoutSermon_block_imagesInput = {
    where: SermonBlockWhereUniqueInput
    create: XOR<SermonBlockCreateWithoutSermon_block_imagesInput, SermonBlockUncheckedCreateWithoutSermon_block_imagesInput>
  }

  export type ImageCreateWithoutSermonsBlockImagesInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    NewsBlockImages?: NewsBlockImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutSermonsBlockImagesInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    NewsBlockImages?: NewsBlockImageUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutSermonsBlockImagesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutSermonsBlockImagesInput, ImageUncheckedCreateWithoutSermonsBlockImagesInput>
  }

  export type SermonBlockUpsertWithoutSermon_block_imagesInput = {
    update: XOR<SermonBlockUpdateWithoutSermon_block_imagesInput, SermonBlockUncheckedUpdateWithoutSermon_block_imagesInput>
    create: XOR<SermonBlockCreateWithoutSermon_block_imagesInput, SermonBlockUncheckedCreateWithoutSermon_block_imagesInput>
    where?: SermonBlockWhereInput
  }

  export type SermonBlockUpdateToOneWithWhereWithoutSermon_block_imagesInput = {
    where?: SermonBlockWhereInput
    data: XOR<SermonBlockUpdateWithoutSermon_block_imagesInput, SermonBlockUncheckedUpdateWithoutSermon_block_imagesInput>
  }

  export type SermonBlockUpdateWithoutSermon_block_imagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon?: SermonUpdateOneRequiredWithoutSermon_blocksNestedInput
  }

  export type SermonBlockUncheckedUpdateWithoutSermon_block_imagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ImageUpsertWithoutSermonsBlockImagesInput = {
    update: XOR<ImageUpdateWithoutSermonsBlockImagesInput, ImageUncheckedUpdateWithoutSermonsBlockImagesInput>
    create: XOR<ImageCreateWithoutSermonsBlockImagesInput, ImageUncheckedCreateWithoutSermonsBlockImagesInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutSermonsBlockImagesInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutSermonsBlockImagesInput, ImageUncheckedUpdateWithoutSermonsBlockImagesInput>
  }

  export type ImageUpdateWithoutSermonsBlockImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NewsBlockImages?: NewsBlockImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutSermonsBlockImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NewsBlockImages?: NewsBlockImageUncheckedUpdateManyWithoutImageNestedInput
  }

  export type NewsBlockCreateManyNewsInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
  }

  export type NewsBlockUpdateWithoutNewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    news_block_images?: NewsBlockImageUpdateManyWithoutNews_blockNestedInput
  }

  export type NewsBlockUncheckedUpdateWithoutNewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    news_block_images?: NewsBlockImageUncheckedUpdateManyWithoutNews_blockNestedInput
  }

  export type NewsBlockUncheckedUpdateManyWithoutNewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NewsBlockImageCreateManyNews_blockInput = {
    id?: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type NewsBlockImageUpdateWithoutNews_blockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    image?: ImageUpdateOneRequiredWithoutNewsBlockImagesNestedInput
  }

  export type NewsBlockImageUncheckedUpdateWithoutNews_blockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NewsBlockImageUncheckedUpdateManyWithoutNews_blockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NewsBlockImageCreateManyImageInput = {
    id?: bigint | number
    news_block_id: bigint | number
    order: bigint | number
  }

  export type SermonBlockImageCreateManyImageInput = {
    id?: bigint | number
    sermon_block_id: bigint | number
    order: bigint | number
  }

  export type NewsBlockImageUpdateWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    news_block?: NewsBlockUpdateOneRequiredWithoutNews_block_imagesNestedInput
  }

  export type NewsBlockImageUncheckedUpdateWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    news_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NewsBlockImageUncheckedUpdateManyWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    news_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SermonBlockImageUpdateWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_block?: SermonBlockUpdateOneRequiredWithoutSermon_block_imagesNestedInput
  }

  export type SermonBlockImageUncheckedUpdateWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SermonBlockImageUncheckedUpdateManyWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SermonBlockCreateManySermonInput = {
    id?: bigint | number
    title?: string | null
    content?: string | null
    order: bigint | number
  }

  export type SermonBlockUpdateWithoutSermonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_block_images?: SermonBlockImageUpdateManyWithoutSermon_blockNestedInput
  }

  export type SermonBlockUncheckedUpdateWithoutSermonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    sermon_block_images?: SermonBlockImageUncheckedUpdateManyWithoutSermon_blockNestedInput
  }

  export type SermonBlockUncheckedUpdateManyWithoutSermonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SermonBlockImageCreateManySermon_blockInput = {
    id?: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type SermonBlockImageUpdateWithoutSermon_blockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    image?: ImageUpdateOneRequiredWithoutSermonsBlockImagesNestedInput
  }

  export type SermonBlockImageUncheckedUpdateWithoutSermon_blockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SermonBlockImageUncheckedUpdateManyWithoutSermon_blockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
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