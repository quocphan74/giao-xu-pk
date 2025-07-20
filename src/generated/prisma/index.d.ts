
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
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model AnnouncementBlock
 * 
 */
export type AnnouncementBlock = $Result.DefaultSelection<Prisma.$AnnouncementBlockPayload>
/**
 * Model AnnouncementBlockImage
 * 
 */
export type AnnouncementBlockImage = $Result.DefaultSelection<Prisma.$AnnouncementBlockImagePayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model MassSchedules
 * 
 */
export type MassSchedules = $Result.DefaultSelection<Prisma.$MassSchedulesPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>

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

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcementBlock`: Exposes CRUD operations for the **AnnouncementBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnouncementBlocks
    * const announcementBlocks = await prisma.announcementBlock.findMany()
    * ```
    */
  get announcementBlock(): Prisma.AnnouncementBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcementBlockImage`: Exposes CRUD operations for the **AnnouncementBlockImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnouncementBlockImages
    * const announcementBlockImages = await prisma.announcementBlockImage.findMany()
    * ```
    */
  get announcementBlockImage(): Prisma.AnnouncementBlockImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.massSchedules`: Exposes CRUD operations for the **MassSchedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MassSchedules
    * const massSchedules = await prisma.massSchedules.findMany()
    * ```
    */
  get massSchedules(): Prisma.MassSchedulesDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;
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
    SermonBlockImage: 'SermonBlockImage',
    Announcement: 'Announcement',
    AnnouncementBlock: 'AnnouncementBlock',
    AnnouncementBlockImage: 'AnnouncementBlockImage',
    Contact: 'Contact',
    MassSchedules: 'MassSchedules',
    User: 'User',
    Role: 'Role',
    Group: 'Group'
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
      modelProps: "news" | "newsBlock" | "newsBlockImage" | "image" | "sermon" | "sermonBlock" | "sermonBlockImage" | "announcement" | "announcementBlock" | "announcementBlockImage" | "contact" | "massSchedules" | "user" | "role" | "group"
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
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      AnnouncementBlock: {
        payload: Prisma.$AnnouncementBlockPayload<ExtArgs>
        fields: Prisma.AnnouncementBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload>
          }
          findMany: {
            args: Prisma.AnnouncementBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload>[]
          }
          create: {
            args: Prisma.AnnouncementBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload>
          }
          createMany: {
            args: Prisma.AnnouncementBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload>
          }
          update: {
            args: Prisma.AnnouncementBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncementBlock>
          }
          groupBy: {
            args: Prisma.AnnouncementBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementBlockCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementBlockCountAggregateOutputType> | number
          }
        }
      }
      AnnouncementBlockImage: {
        payload: Prisma.$AnnouncementBlockImagePayload<ExtArgs>
        fields: Prisma.AnnouncementBlockImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementBlockImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementBlockImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload>
          }
          findFirst: {
            args: Prisma.AnnouncementBlockImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementBlockImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload>
          }
          findMany: {
            args: Prisma.AnnouncementBlockImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload>[]
          }
          create: {
            args: Prisma.AnnouncementBlockImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload>
          }
          createMany: {
            args: Prisma.AnnouncementBlockImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementBlockImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload>[]
          }
          delete: {
            args: Prisma.AnnouncementBlockImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload>
          }
          update: {
            args: Prisma.AnnouncementBlockImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementBlockImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementBlockImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementBlockImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementBlockImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementBlockImagePayload>
          }
          aggregate: {
            args: Prisma.AnnouncementBlockImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncementBlockImage>
          }
          groupBy: {
            args: Prisma.AnnouncementBlockImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementBlockImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementBlockImageCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementBlockImageCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      MassSchedules: {
        payload: Prisma.$MassSchedulesPayload<ExtArgs>
        fields: Prisma.MassSchedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MassSchedulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MassSchedulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload>
          }
          findFirst: {
            args: Prisma.MassSchedulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MassSchedulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload>
          }
          findMany: {
            args: Prisma.MassSchedulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload>[]
          }
          create: {
            args: Prisma.MassSchedulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload>
          }
          createMany: {
            args: Prisma.MassSchedulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MassSchedulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload>[]
          }
          delete: {
            args: Prisma.MassSchedulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload>
          }
          update: {
            args: Prisma.MassSchedulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload>
          }
          deleteMany: {
            args: Prisma.MassSchedulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MassSchedulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MassSchedulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload>[]
          }
          upsert: {
            args: Prisma.MassSchedulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulesPayload>
          }
          aggregate: {
            args: Prisma.MassSchedulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMassSchedules>
          }
          groupBy: {
            args: Prisma.MassSchedulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MassSchedulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MassSchedulesCountArgs<ExtArgs>
            result: $Utils.Optional<MassSchedulesCountAggregateOutputType> | number
          }
        }
      }
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
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
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
    announcement?: AnnouncementOmit
    announcementBlock?: AnnouncementBlockOmit
    announcementBlockImage?: AnnouncementBlockImageOmit
    contact?: ContactOmit
    massSchedules?: MassSchedulesOmit
    user?: UserOmit
    role?: RoleOmit
    group?: GroupOmit
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
    AnnouncementBlockImages: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NewsBlockImages?: boolean | ImageCountOutputTypeCountNewsBlockImagesArgs
    SermonsBlockImages?: boolean | ImageCountOutputTypeCountSermonsBlockImagesArgs
    AnnouncementBlockImages?: boolean | ImageCountOutputTypeCountAnnouncementBlockImagesArgs
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
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountAnnouncementBlockImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementBlockImageWhereInput
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
   * Count Type AnnouncementCountOutputType
   */

  export type AnnouncementCountOutputType = {
    announcement_blocks: number
  }

  export type AnnouncementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement_blocks?: boolean | AnnouncementCountOutputTypeCountAnnouncement_blocksArgs
  }

  // Custom InputTypes
  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCountOutputType
     */
    select?: AnnouncementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountAnnouncement_blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementBlockWhereInput
  }


  /**
   * Count Type AnnouncementBlockCountOutputType
   */

  export type AnnouncementBlockCountOutputType = {
    announcement_block_images: number
  }

  export type AnnouncementBlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement_block_images?: boolean | AnnouncementBlockCountOutputTypeCountAnnouncement_block_imagesArgs
  }

  // Custom InputTypes
  /**
   * AnnouncementBlockCountOutputType without action
   */
  export type AnnouncementBlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockCountOutputType
     */
    select?: AnnouncementBlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnouncementBlockCountOutputType without action
   */
  export type AnnouncementBlockCountOutputTypeCountAnnouncement_block_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementBlockImageWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    user: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
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
    AnnouncementBlockImages?: boolean | Image$AnnouncementBlockImagesArgs<ExtArgs>
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
    AnnouncementBlockImages?: boolean | Image$AnnouncementBlockImagesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      NewsBlockImages: Prisma.$NewsBlockImagePayload<ExtArgs>[]
      SermonsBlockImages: Prisma.$SermonBlockImagePayload<ExtArgs>[]
      AnnouncementBlockImages: Prisma.$AnnouncementBlockImagePayload<ExtArgs>[]
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
    AnnouncementBlockImages<T extends Image$AnnouncementBlockImagesArgs<ExtArgs> = {}>(args?: Subset<T, Image$AnnouncementBlockImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Image.AnnouncementBlockImages
   */
  export type Image$AnnouncementBlockImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    where?: AnnouncementBlockImageWhereInput
    orderBy?: AnnouncementBlockImageOrderByWithRelationInput | AnnouncementBlockImageOrderByWithRelationInput[]
    cursor?: AnnouncementBlockImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementBlockImageScalarFieldEnum | AnnouncementBlockImageScalarFieldEnum[]
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
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    id: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    id: bigint | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    id?: true
  }

  export type AnnouncementSumAggregateInputType = {
    id?: true
  }

  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: bigint
    title: string | null
    status: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    announcement_blocks?: boolean | Announcement$announcement_blocksArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement_blocks?: boolean | Announcement$announcement_blocksArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      announcement_blocks: Prisma.$AnnouncementBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string | null
      status: boolean
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement_blocks<T extends Announcement$announcement_blocksArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$announcement_blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'BigInt'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly status: FieldRef<"Announcement", 'Boolean'>
    readonly created_at: FieldRef<"Announcement", 'DateTime'>
    readonly updated_at: FieldRef<"Announcement", 'DateTime'>
    readonly deleted_at: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement.announcement_blocks
   */
  export type Announcement$announcement_blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    where?: AnnouncementBlockWhereInput
    orderBy?: AnnouncementBlockOrderByWithRelationInput | AnnouncementBlockOrderByWithRelationInput[]
    cursor?: AnnouncementBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementBlockScalarFieldEnum | AnnouncementBlockScalarFieldEnum[]
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model AnnouncementBlock
   */

  export type AggregateAnnouncementBlock = {
    _count: AnnouncementBlockCountAggregateOutputType | null
    _avg: AnnouncementBlockAvgAggregateOutputType | null
    _sum: AnnouncementBlockSumAggregateOutputType | null
    _min: AnnouncementBlockMinAggregateOutputType | null
    _max: AnnouncementBlockMaxAggregateOutputType | null
  }

  export type AnnouncementBlockAvgAggregateOutputType = {
    id: number | null
    announcement_id: number | null
    order: number | null
  }

  export type AnnouncementBlockSumAggregateOutputType = {
    id: bigint | null
    announcement_id: bigint | null
    order: bigint | null
  }

  export type AnnouncementBlockMinAggregateOutputType = {
    id: bigint | null
    announcement_id: bigint | null
    content: string | null
    order: bigint | null
  }

  export type AnnouncementBlockMaxAggregateOutputType = {
    id: bigint | null
    announcement_id: bigint | null
    content: string | null
    order: bigint | null
  }

  export type AnnouncementBlockCountAggregateOutputType = {
    id: number
    announcement_id: number
    content: number
    order: number
    _all: number
  }


  export type AnnouncementBlockAvgAggregateInputType = {
    id?: true
    announcement_id?: true
    order?: true
  }

  export type AnnouncementBlockSumAggregateInputType = {
    id?: true
    announcement_id?: true
    order?: true
  }

  export type AnnouncementBlockMinAggregateInputType = {
    id?: true
    announcement_id?: true
    content?: true
    order?: true
  }

  export type AnnouncementBlockMaxAggregateInputType = {
    id?: true
    announcement_id?: true
    content?: true
    order?: true
  }

  export type AnnouncementBlockCountAggregateInputType = {
    id?: true
    announcement_id?: true
    content?: true
    order?: true
    _all?: true
  }

  export type AnnouncementBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementBlock to aggregate.
     */
    where?: AnnouncementBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementBlocks to fetch.
     */
    orderBy?: AnnouncementBlockOrderByWithRelationInput | AnnouncementBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnnouncementBlocks
    **/
    _count?: true | AnnouncementBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementBlockMaxAggregateInputType
  }

  export type GetAnnouncementBlockAggregateType<T extends AnnouncementBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncementBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncementBlock[P]>
      : GetScalarType<T[P], AggregateAnnouncementBlock[P]>
  }




  export type AnnouncementBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementBlockWhereInput
    orderBy?: AnnouncementBlockOrderByWithAggregationInput | AnnouncementBlockOrderByWithAggregationInput[]
    by: AnnouncementBlockScalarFieldEnum[] | AnnouncementBlockScalarFieldEnum
    having?: AnnouncementBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementBlockCountAggregateInputType | true
    _avg?: AnnouncementBlockAvgAggregateInputType
    _sum?: AnnouncementBlockSumAggregateInputType
    _min?: AnnouncementBlockMinAggregateInputType
    _max?: AnnouncementBlockMaxAggregateInputType
  }

  export type AnnouncementBlockGroupByOutputType = {
    id: bigint
    announcement_id: bigint
    content: string | null
    order: bigint
    _count: AnnouncementBlockCountAggregateOutputType | null
    _avg: AnnouncementBlockAvgAggregateOutputType | null
    _sum: AnnouncementBlockSumAggregateOutputType | null
    _min: AnnouncementBlockMinAggregateOutputType | null
    _max: AnnouncementBlockMaxAggregateOutputType | null
  }

  type GetAnnouncementBlockGroupByPayload<T extends AnnouncementBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementBlockGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementBlockGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcement_id?: boolean
    content?: boolean
    order?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    announcement_block_images?: boolean | AnnouncementBlock$announcement_block_imagesArgs<ExtArgs>
    _count?: boolean | AnnouncementBlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementBlock"]>

  export type AnnouncementBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcement_id?: boolean
    content?: boolean
    order?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementBlock"]>

  export type AnnouncementBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcement_id?: boolean
    content?: boolean
    order?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementBlock"]>

  export type AnnouncementBlockSelectScalar = {
    id?: boolean
    announcement_id?: boolean
    content?: boolean
    order?: boolean
  }

  export type AnnouncementBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "announcement_id" | "content" | "order", ExtArgs["result"]["announcementBlock"]>
  export type AnnouncementBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    announcement_block_images?: boolean | AnnouncementBlock$announcement_block_imagesArgs<ExtArgs>
    _count?: boolean | AnnouncementBlockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnouncementBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }
  export type AnnouncementBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }

  export type $AnnouncementBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnnouncementBlock"
    objects: {
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
      announcement_block_images: Prisma.$AnnouncementBlockImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      announcement_id: bigint
      content: string | null
      order: bigint
    }, ExtArgs["result"]["announcementBlock"]>
    composites: {}
  }

  type AnnouncementBlockGetPayload<S extends boolean | null | undefined | AnnouncementBlockDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementBlockPayload, S>

  type AnnouncementBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementBlockCountAggregateInputType | true
    }

  export interface AnnouncementBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnnouncementBlock'], meta: { name: 'AnnouncementBlock' } }
    /**
     * Find zero or one AnnouncementBlock that matches the filter.
     * @param {AnnouncementBlockFindUniqueArgs} args - Arguments to find a AnnouncementBlock
     * @example
     * // Get one AnnouncementBlock
     * const announcementBlock = await prisma.announcementBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementBlockFindUniqueArgs>(args: SelectSubset<T, AnnouncementBlockFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementBlockClient<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnnouncementBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementBlockFindUniqueOrThrowArgs} args - Arguments to find a AnnouncementBlock
     * @example
     * // Get one AnnouncementBlock
     * const announcementBlock = await prisma.announcementBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementBlockClient<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockFindFirstArgs} args - Arguments to find a AnnouncementBlock
     * @example
     * // Get one AnnouncementBlock
     * const announcementBlock = await prisma.announcementBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementBlockFindFirstArgs>(args?: SelectSubset<T, AnnouncementBlockFindFirstArgs<ExtArgs>>): Prisma__AnnouncementBlockClient<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockFindFirstOrThrowArgs} args - Arguments to find a AnnouncementBlock
     * @example
     * // Get one AnnouncementBlock
     * const announcementBlock = await prisma.announcementBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementBlockClient<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnnouncementBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnnouncementBlocks
     * const announcementBlocks = await prisma.announcementBlock.findMany()
     * 
     * // Get first 10 AnnouncementBlocks
     * const announcementBlocks = await prisma.announcementBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementBlockWithIdOnly = await prisma.announcementBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementBlockFindManyArgs>(args?: SelectSubset<T, AnnouncementBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnnouncementBlock.
     * @param {AnnouncementBlockCreateArgs} args - Arguments to create a AnnouncementBlock.
     * @example
     * // Create one AnnouncementBlock
     * const AnnouncementBlock = await prisma.announcementBlock.create({
     *   data: {
     *     // ... data to create a AnnouncementBlock
     *   }
     * })
     * 
     */
    create<T extends AnnouncementBlockCreateArgs>(args: SelectSubset<T, AnnouncementBlockCreateArgs<ExtArgs>>): Prisma__AnnouncementBlockClient<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnnouncementBlocks.
     * @param {AnnouncementBlockCreateManyArgs} args - Arguments to create many AnnouncementBlocks.
     * @example
     * // Create many AnnouncementBlocks
     * const announcementBlock = await prisma.announcementBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementBlockCreateManyArgs>(args?: SelectSubset<T, AnnouncementBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnnouncementBlocks and returns the data saved in the database.
     * @param {AnnouncementBlockCreateManyAndReturnArgs} args - Arguments to create many AnnouncementBlocks.
     * @example
     * // Create many AnnouncementBlocks
     * const announcementBlock = await prisma.announcementBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnnouncementBlocks and only return the `id`
     * const announcementBlockWithIdOnly = await prisma.announcementBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnnouncementBlock.
     * @param {AnnouncementBlockDeleteArgs} args - Arguments to delete one AnnouncementBlock.
     * @example
     * // Delete one AnnouncementBlock
     * const AnnouncementBlock = await prisma.announcementBlock.delete({
     *   where: {
     *     // ... filter to delete one AnnouncementBlock
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementBlockDeleteArgs>(args: SelectSubset<T, AnnouncementBlockDeleteArgs<ExtArgs>>): Prisma__AnnouncementBlockClient<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnnouncementBlock.
     * @param {AnnouncementBlockUpdateArgs} args - Arguments to update one AnnouncementBlock.
     * @example
     * // Update one AnnouncementBlock
     * const announcementBlock = await prisma.announcementBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementBlockUpdateArgs>(args: SelectSubset<T, AnnouncementBlockUpdateArgs<ExtArgs>>): Prisma__AnnouncementBlockClient<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnnouncementBlocks.
     * @param {AnnouncementBlockDeleteManyArgs} args - Arguments to filter AnnouncementBlocks to delete.
     * @example
     * // Delete a few AnnouncementBlocks
     * const { count } = await prisma.announcementBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementBlockDeleteManyArgs>(args?: SelectSubset<T, AnnouncementBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnnouncementBlocks
     * const announcementBlock = await prisma.announcementBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementBlockUpdateManyArgs>(args: SelectSubset<T, AnnouncementBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementBlocks and returns the data updated in the database.
     * @param {AnnouncementBlockUpdateManyAndReturnArgs} args - Arguments to update many AnnouncementBlocks.
     * @example
     * // Update many AnnouncementBlocks
     * const announcementBlock = await prisma.announcementBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnnouncementBlocks and only return the `id`
     * const announcementBlockWithIdOnly = await prisma.announcementBlock.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnnouncementBlock.
     * @param {AnnouncementBlockUpsertArgs} args - Arguments to update or create a AnnouncementBlock.
     * @example
     * // Update or create a AnnouncementBlock
     * const announcementBlock = await prisma.announcementBlock.upsert({
     *   create: {
     *     // ... data to create a AnnouncementBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnnouncementBlock we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementBlockUpsertArgs>(args: SelectSubset<T, AnnouncementBlockUpsertArgs<ExtArgs>>): Prisma__AnnouncementBlockClient<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnnouncementBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockCountArgs} args - Arguments to filter AnnouncementBlocks to count.
     * @example
     * // Count the number of AnnouncementBlocks
     * const count = await prisma.announcementBlock.count({
     *   where: {
     *     // ... the filter for the AnnouncementBlocks we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementBlockCountArgs>(
      args?: Subset<T, AnnouncementBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnnouncementBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementBlockAggregateArgs>(args: Subset<T, AnnouncementBlockAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementBlockAggregateType<T>>

    /**
     * Group by AnnouncementBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementBlockGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnnouncementBlock model
   */
  readonly fields: AnnouncementBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnnouncementBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    announcement_block_images<T extends AnnouncementBlock$announcement_block_imagesArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementBlock$announcement_block_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AnnouncementBlock model
   */
  interface AnnouncementBlockFieldRefs {
    readonly id: FieldRef<"AnnouncementBlock", 'BigInt'>
    readonly announcement_id: FieldRef<"AnnouncementBlock", 'BigInt'>
    readonly content: FieldRef<"AnnouncementBlock", 'String'>
    readonly order: FieldRef<"AnnouncementBlock", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * AnnouncementBlock findUnique
   */
  export type AnnouncementBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlock to fetch.
     */
    where: AnnouncementBlockWhereUniqueInput
  }

  /**
   * AnnouncementBlock findUniqueOrThrow
   */
  export type AnnouncementBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlock to fetch.
     */
    where: AnnouncementBlockWhereUniqueInput
  }

  /**
   * AnnouncementBlock findFirst
   */
  export type AnnouncementBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlock to fetch.
     */
    where?: AnnouncementBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementBlocks to fetch.
     */
    orderBy?: AnnouncementBlockOrderByWithRelationInput | AnnouncementBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementBlocks.
     */
    cursor?: AnnouncementBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementBlocks.
     */
    distinct?: AnnouncementBlockScalarFieldEnum | AnnouncementBlockScalarFieldEnum[]
  }

  /**
   * AnnouncementBlock findFirstOrThrow
   */
  export type AnnouncementBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlock to fetch.
     */
    where?: AnnouncementBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementBlocks to fetch.
     */
    orderBy?: AnnouncementBlockOrderByWithRelationInput | AnnouncementBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementBlocks.
     */
    cursor?: AnnouncementBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementBlocks.
     */
    distinct?: AnnouncementBlockScalarFieldEnum | AnnouncementBlockScalarFieldEnum[]
  }

  /**
   * AnnouncementBlock findMany
   */
  export type AnnouncementBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlocks to fetch.
     */
    where?: AnnouncementBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementBlocks to fetch.
     */
    orderBy?: AnnouncementBlockOrderByWithRelationInput | AnnouncementBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnnouncementBlocks.
     */
    cursor?: AnnouncementBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementBlocks.
     */
    skip?: number
    distinct?: AnnouncementBlockScalarFieldEnum | AnnouncementBlockScalarFieldEnum[]
  }

  /**
   * AnnouncementBlock create
   */
  export type AnnouncementBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a AnnouncementBlock.
     */
    data: XOR<AnnouncementBlockCreateInput, AnnouncementBlockUncheckedCreateInput>
  }

  /**
   * AnnouncementBlock createMany
   */
  export type AnnouncementBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnnouncementBlocks.
     */
    data: AnnouncementBlockCreateManyInput | AnnouncementBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnnouncementBlock createManyAndReturn
   */
  export type AnnouncementBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * The data used to create many AnnouncementBlocks.
     */
    data: AnnouncementBlockCreateManyInput | AnnouncementBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementBlock update
   */
  export type AnnouncementBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a AnnouncementBlock.
     */
    data: XOR<AnnouncementBlockUpdateInput, AnnouncementBlockUncheckedUpdateInput>
    /**
     * Choose, which AnnouncementBlock to update.
     */
    where: AnnouncementBlockWhereUniqueInput
  }

  /**
   * AnnouncementBlock updateMany
   */
  export type AnnouncementBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnnouncementBlocks.
     */
    data: XOR<AnnouncementBlockUpdateManyMutationInput, AnnouncementBlockUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementBlocks to update
     */
    where?: AnnouncementBlockWhereInput
    /**
     * Limit how many AnnouncementBlocks to update.
     */
    limit?: number
  }

  /**
   * AnnouncementBlock updateManyAndReturn
   */
  export type AnnouncementBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * The data used to update AnnouncementBlocks.
     */
    data: XOR<AnnouncementBlockUpdateManyMutationInput, AnnouncementBlockUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementBlocks to update
     */
    where?: AnnouncementBlockWhereInput
    /**
     * Limit how many AnnouncementBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementBlock upsert
   */
  export type AnnouncementBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the AnnouncementBlock to update in case it exists.
     */
    where: AnnouncementBlockWhereUniqueInput
    /**
     * In case the AnnouncementBlock found by the `where` argument doesn't exist, create a new AnnouncementBlock with this data.
     */
    create: XOR<AnnouncementBlockCreateInput, AnnouncementBlockUncheckedCreateInput>
    /**
     * In case the AnnouncementBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementBlockUpdateInput, AnnouncementBlockUncheckedUpdateInput>
  }

  /**
   * AnnouncementBlock delete
   */
  export type AnnouncementBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
    /**
     * Filter which AnnouncementBlock to delete.
     */
    where: AnnouncementBlockWhereUniqueInput
  }

  /**
   * AnnouncementBlock deleteMany
   */
  export type AnnouncementBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementBlocks to delete
     */
    where?: AnnouncementBlockWhereInput
    /**
     * Limit how many AnnouncementBlocks to delete.
     */
    limit?: number
  }

  /**
   * AnnouncementBlock.announcement_block_images
   */
  export type AnnouncementBlock$announcement_block_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    where?: AnnouncementBlockImageWhereInput
    orderBy?: AnnouncementBlockImageOrderByWithRelationInput | AnnouncementBlockImageOrderByWithRelationInput[]
    cursor?: AnnouncementBlockImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementBlockImageScalarFieldEnum | AnnouncementBlockImageScalarFieldEnum[]
  }

  /**
   * AnnouncementBlock without action
   */
  export type AnnouncementBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlock
     */
    select?: AnnouncementBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlock
     */
    omit?: AnnouncementBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockInclude<ExtArgs> | null
  }


  /**
   * Model AnnouncementBlockImage
   */

  export type AggregateAnnouncementBlockImage = {
    _count: AnnouncementBlockImageCountAggregateOutputType | null
    _avg: AnnouncementBlockImageAvgAggregateOutputType | null
    _sum: AnnouncementBlockImageSumAggregateOutputType | null
    _min: AnnouncementBlockImageMinAggregateOutputType | null
    _max: AnnouncementBlockImageMaxAggregateOutputType | null
  }

  export type AnnouncementBlockImageAvgAggregateOutputType = {
    id: number | null
    announcement_block_id: number | null
    image_id: number | null
    order: number | null
  }

  export type AnnouncementBlockImageSumAggregateOutputType = {
    id: bigint | null
    announcement_block_id: bigint | null
    image_id: bigint | null
    order: bigint | null
  }

  export type AnnouncementBlockImageMinAggregateOutputType = {
    id: bigint | null
    announcement_block_id: bigint | null
    image_id: bigint | null
    order: bigint | null
  }

  export type AnnouncementBlockImageMaxAggregateOutputType = {
    id: bigint | null
    announcement_block_id: bigint | null
    image_id: bigint | null
    order: bigint | null
  }

  export type AnnouncementBlockImageCountAggregateOutputType = {
    id: number
    announcement_block_id: number
    image_id: number
    order: number
    _all: number
  }


  export type AnnouncementBlockImageAvgAggregateInputType = {
    id?: true
    announcement_block_id?: true
    image_id?: true
    order?: true
  }

  export type AnnouncementBlockImageSumAggregateInputType = {
    id?: true
    announcement_block_id?: true
    image_id?: true
    order?: true
  }

  export type AnnouncementBlockImageMinAggregateInputType = {
    id?: true
    announcement_block_id?: true
    image_id?: true
    order?: true
  }

  export type AnnouncementBlockImageMaxAggregateInputType = {
    id?: true
    announcement_block_id?: true
    image_id?: true
    order?: true
  }

  export type AnnouncementBlockImageCountAggregateInputType = {
    id?: true
    announcement_block_id?: true
    image_id?: true
    order?: true
    _all?: true
  }

  export type AnnouncementBlockImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementBlockImage to aggregate.
     */
    where?: AnnouncementBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementBlockImages to fetch.
     */
    orderBy?: AnnouncementBlockImageOrderByWithRelationInput | AnnouncementBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementBlockImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnnouncementBlockImages
    **/
    _count?: true | AnnouncementBlockImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementBlockImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementBlockImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementBlockImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementBlockImageMaxAggregateInputType
  }

  export type GetAnnouncementBlockImageAggregateType<T extends AnnouncementBlockImageAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncementBlockImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncementBlockImage[P]>
      : GetScalarType<T[P], AggregateAnnouncementBlockImage[P]>
  }




  export type AnnouncementBlockImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementBlockImageWhereInput
    orderBy?: AnnouncementBlockImageOrderByWithAggregationInput | AnnouncementBlockImageOrderByWithAggregationInput[]
    by: AnnouncementBlockImageScalarFieldEnum[] | AnnouncementBlockImageScalarFieldEnum
    having?: AnnouncementBlockImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementBlockImageCountAggregateInputType | true
    _avg?: AnnouncementBlockImageAvgAggregateInputType
    _sum?: AnnouncementBlockImageSumAggregateInputType
    _min?: AnnouncementBlockImageMinAggregateInputType
    _max?: AnnouncementBlockImageMaxAggregateInputType
  }

  export type AnnouncementBlockImageGroupByOutputType = {
    id: bigint
    announcement_block_id: bigint
    image_id: bigint
    order: bigint
    _count: AnnouncementBlockImageCountAggregateOutputType | null
    _avg: AnnouncementBlockImageAvgAggregateOutputType | null
    _sum: AnnouncementBlockImageSumAggregateOutputType | null
    _min: AnnouncementBlockImageMinAggregateOutputType | null
    _max: AnnouncementBlockImageMaxAggregateOutputType | null
  }

  type GetAnnouncementBlockImageGroupByPayload<T extends AnnouncementBlockImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementBlockImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementBlockImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementBlockImageGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementBlockImageGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementBlockImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcement_block_id?: boolean
    image_id?: boolean
    order?: boolean
    announcement_block?: boolean | AnnouncementBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementBlockImage"]>

  export type AnnouncementBlockImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcement_block_id?: boolean
    image_id?: boolean
    order?: boolean
    announcement_block?: boolean | AnnouncementBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementBlockImage"]>

  export type AnnouncementBlockImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcement_block_id?: boolean
    image_id?: boolean
    order?: boolean
    announcement_block?: boolean | AnnouncementBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementBlockImage"]>

  export type AnnouncementBlockImageSelectScalar = {
    id?: boolean
    announcement_block_id?: boolean
    image_id?: boolean
    order?: boolean
  }

  export type AnnouncementBlockImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "announcement_block_id" | "image_id" | "order", ExtArgs["result"]["announcementBlockImage"]>
  export type AnnouncementBlockImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement_block?: boolean | AnnouncementBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type AnnouncementBlockImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement_block?: boolean | AnnouncementBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type AnnouncementBlockImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement_block?: boolean | AnnouncementBlockDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $AnnouncementBlockImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnnouncementBlockImage"
    objects: {
      announcement_block: Prisma.$AnnouncementBlockPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      announcement_block_id: bigint
      image_id: bigint
      order: bigint
    }, ExtArgs["result"]["announcementBlockImage"]>
    composites: {}
  }

  type AnnouncementBlockImageGetPayload<S extends boolean | null | undefined | AnnouncementBlockImageDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementBlockImagePayload, S>

  type AnnouncementBlockImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementBlockImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementBlockImageCountAggregateInputType | true
    }

  export interface AnnouncementBlockImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnnouncementBlockImage'], meta: { name: 'AnnouncementBlockImage' } }
    /**
     * Find zero or one AnnouncementBlockImage that matches the filter.
     * @param {AnnouncementBlockImageFindUniqueArgs} args - Arguments to find a AnnouncementBlockImage
     * @example
     * // Get one AnnouncementBlockImage
     * const announcementBlockImage = await prisma.announcementBlockImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementBlockImageFindUniqueArgs>(args: SelectSubset<T, AnnouncementBlockImageFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementBlockImageClient<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnnouncementBlockImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementBlockImageFindUniqueOrThrowArgs} args - Arguments to find a AnnouncementBlockImage
     * @example
     * // Get one AnnouncementBlockImage
     * const announcementBlockImage = await prisma.announcementBlockImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementBlockImageFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementBlockImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementBlockImageClient<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementBlockImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockImageFindFirstArgs} args - Arguments to find a AnnouncementBlockImage
     * @example
     * // Get one AnnouncementBlockImage
     * const announcementBlockImage = await prisma.announcementBlockImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementBlockImageFindFirstArgs>(args?: SelectSubset<T, AnnouncementBlockImageFindFirstArgs<ExtArgs>>): Prisma__AnnouncementBlockImageClient<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementBlockImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockImageFindFirstOrThrowArgs} args - Arguments to find a AnnouncementBlockImage
     * @example
     * // Get one AnnouncementBlockImage
     * const announcementBlockImage = await prisma.announcementBlockImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementBlockImageFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementBlockImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementBlockImageClient<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnnouncementBlockImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnnouncementBlockImages
     * const announcementBlockImages = await prisma.announcementBlockImage.findMany()
     * 
     * // Get first 10 AnnouncementBlockImages
     * const announcementBlockImages = await prisma.announcementBlockImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementBlockImageWithIdOnly = await prisma.announcementBlockImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementBlockImageFindManyArgs>(args?: SelectSubset<T, AnnouncementBlockImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnnouncementBlockImage.
     * @param {AnnouncementBlockImageCreateArgs} args - Arguments to create a AnnouncementBlockImage.
     * @example
     * // Create one AnnouncementBlockImage
     * const AnnouncementBlockImage = await prisma.announcementBlockImage.create({
     *   data: {
     *     // ... data to create a AnnouncementBlockImage
     *   }
     * })
     * 
     */
    create<T extends AnnouncementBlockImageCreateArgs>(args: SelectSubset<T, AnnouncementBlockImageCreateArgs<ExtArgs>>): Prisma__AnnouncementBlockImageClient<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnnouncementBlockImages.
     * @param {AnnouncementBlockImageCreateManyArgs} args - Arguments to create many AnnouncementBlockImages.
     * @example
     * // Create many AnnouncementBlockImages
     * const announcementBlockImage = await prisma.announcementBlockImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementBlockImageCreateManyArgs>(args?: SelectSubset<T, AnnouncementBlockImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnnouncementBlockImages and returns the data saved in the database.
     * @param {AnnouncementBlockImageCreateManyAndReturnArgs} args - Arguments to create many AnnouncementBlockImages.
     * @example
     * // Create many AnnouncementBlockImages
     * const announcementBlockImage = await prisma.announcementBlockImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnnouncementBlockImages and only return the `id`
     * const announcementBlockImageWithIdOnly = await prisma.announcementBlockImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementBlockImageCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementBlockImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnnouncementBlockImage.
     * @param {AnnouncementBlockImageDeleteArgs} args - Arguments to delete one AnnouncementBlockImage.
     * @example
     * // Delete one AnnouncementBlockImage
     * const AnnouncementBlockImage = await prisma.announcementBlockImage.delete({
     *   where: {
     *     // ... filter to delete one AnnouncementBlockImage
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementBlockImageDeleteArgs>(args: SelectSubset<T, AnnouncementBlockImageDeleteArgs<ExtArgs>>): Prisma__AnnouncementBlockImageClient<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnnouncementBlockImage.
     * @param {AnnouncementBlockImageUpdateArgs} args - Arguments to update one AnnouncementBlockImage.
     * @example
     * // Update one AnnouncementBlockImage
     * const announcementBlockImage = await prisma.announcementBlockImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementBlockImageUpdateArgs>(args: SelectSubset<T, AnnouncementBlockImageUpdateArgs<ExtArgs>>): Prisma__AnnouncementBlockImageClient<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnnouncementBlockImages.
     * @param {AnnouncementBlockImageDeleteManyArgs} args - Arguments to filter AnnouncementBlockImages to delete.
     * @example
     * // Delete a few AnnouncementBlockImages
     * const { count } = await prisma.announcementBlockImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementBlockImageDeleteManyArgs>(args?: SelectSubset<T, AnnouncementBlockImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementBlockImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnnouncementBlockImages
     * const announcementBlockImage = await prisma.announcementBlockImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementBlockImageUpdateManyArgs>(args: SelectSubset<T, AnnouncementBlockImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementBlockImages and returns the data updated in the database.
     * @param {AnnouncementBlockImageUpdateManyAndReturnArgs} args - Arguments to update many AnnouncementBlockImages.
     * @example
     * // Update many AnnouncementBlockImages
     * const announcementBlockImage = await prisma.announcementBlockImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnnouncementBlockImages and only return the `id`
     * const announcementBlockImageWithIdOnly = await prisma.announcementBlockImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementBlockImageUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementBlockImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnnouncementBlockImage.
     * @param {AnnouncementBlockImageUpsertArgs} args - Arguments to update or create a AnnouncementBlockImage.
     * @example
     * // Update or create a AnnouncementBlockImage
     * const announcementBlockImage = await prisma.announcementBlockImage.upsert({
     *   create: {
     *     // ... data to create a AnnouncementBlockImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnnouncementBlockImage we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementBlockImageUpsertArgs>(args: SelectSubset<T, AnnouncementBlockImageUpsertArgs<ExtArgs>>): Prisma__AnnouncementBlockImageClient<$Result.GetResult<Prisma.$AnnouncementBlockImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnnouncementBlockImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockImageCountArgs} args - Arguments to filter AnnouncementBlockImages to count.
     * @example
     * // Count the number of AnnouncementBlockImages
     * const count = await prisma.announcementBlockImage.count({
     *   where: {
     *     // ... the filter for the AnnouncementBlockImages we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementBlockImageCountArgs>(
      args?: Subset<T, AnnouncementBlockImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementBlockImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnnouncementBlockImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementBlockImageAggregateArgs>(args: Subset<T, AnnouncementBlockImageAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementBlockImageAggregateType<T>>

    /**
     * Group by AnnouncementBlockImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementBlockImageGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementBlockImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementBlockImageGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementBlockImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementBlockImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementBlockImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnnouncementBlockImage model
   */
  readonly fields: AnnouncementBlockImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnnouncementBlockImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementBlockImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement_block<T extends AnnouncementBlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementBlockDefaultArgs<ExtArgs>>): Prisma__AnnouncementBlockClient<$Result.GetResult<Prisma.$AnnouncementBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnnouncementBlockImage model
   */
  interface AnnouncementBlockImageFieldRefs {
    readonly id: FieldRef<"AnnouncementBlockImage", 'BigInt'>
    readonly announcement_block_id: FieldRef<"AnnouncementBlockImage", 'BigInt'>
    readonly image_id: FieldRef<"AnnouncementBlockImage", 'BigInt'>
    readonly order: FieldRef<"AnnouncementBlockImage", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * AnnouncementBlockImage findUnique
   */
  export type AnnouncementBlockImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlockImage to fetch.
     */
    where: AnnouncementBlockImageWhereUniqueInput
  }

  /**
   * AnnouncementBlockImage findUniqueOrThrow
   */
  export type AnnouncementBlockImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlockImage to fetch.
     */
    where: AnnouncementBlockImageWhereUniqueInput
  }

  /**
   * AnnouncementBlockImage findFirst
   */
  export type AnnouncementBlockImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlockImage to fetch.
     */
    where?: AnnouncementBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementBlockImages to fetch.
     */
    orderBy?: AnnouncementBlockImageOrderByWithRelationInput | AnnouncementBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementBlockImages.
     */
    cursor?: AnnouncementBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementBlockImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementBlockImages.
     */
    distinct?: AnnouncementBlockImageScalarFieldEnum | AnnouncementBlockImageScalarFieldEnum[]
  }

  /**
   * AnnouncementBlockImage findFirstOrThrow
   */
  export type AnnouncementBlockImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlockImage to fetch.
     */
    where?: AnnouncementBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementBlockImages to fetch.
     */
    orderBy?: AnnouncementBlockImageOrderByWithRelationInput | AnnouncementBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementBlockImages.
     */
    cursor?: AnnouncementBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementBlockImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementBlockImages.
     */
    distinct?: AnnouncementBlockImageScalarFieldEnum | AnnouncementBlockImageScalarFieldEnum[]
  }

  /**
   * AnnouncementBlockImage findMany
   */
  export type AnnouncementBlockImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementBlockImages to fetch.
     */
    where?: AnnouncementBlockImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementBlockImages to fetch.
     */
    orderBy?: AnnouncementBlockImageOrderByWithRelationInput | AnnouncementBlockImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnnouncementBlockImages.
     */
    cursor?: AnnouncementBlockImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementBlockImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementBlockImages.
     */
    skip?: number
    distinct?: AnnouncementBlockImageScalarFieldEnum | AnnouncementBlockImageScalarFieldEnum[]
  }

  /**
   * AnnouncementBlockImage create
   */
  export type AnnouncementBlockImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    /**
     * The data needed to create a AnnouncementBlockImage.
     */
    data: XOR<AnnouncementBlockImageCreateInput, AnnouncementBlockImageUncheckedCreateInput>
  }

  /**
   * AnnouncementBlockImage createMany
   */
  export type AnnouncementBlockImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnnouncementBlockImages.
     */
    data: AnnouncementBlockImageCreateManyInput | AnnouncementBlockImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnnouncementBlockImage createManyAndReturn
   */
  export type AnnouncementBlockImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * The data used to create many AnnouncementBlockImages.
     */
    data: AnnouncementBlockImageCreateManyInput | AnnouncementBlockImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementBlockImage update
   */
  export type AnnouncementBlockImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    /**
     * The data needed to update a AnnouncementBlockImage.
     */
    data: XOR<AnnouncementBlockImageUpdateInput, AnnouncementBlockImageUncheckedUpdateInput>
    /**
     * Choose, which AnnouncementBlockImage to update.
     */
    where: AnnouncementBlockImageWhereUniqueInput
  }

  /**
   * AnnouncementBlockImage updateMany
   */
  export type AnnouncementBlockImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnnouncementBlockImages.
     */
    data: XOR<AnnouncementBlockImageUpdateManyMutationInput, AnnouncementBlockImageUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementBlockImages to update
     */
    where?: AnnouncementBlockImageWhereInput
    /**
     * Limit how many AnnouncementBlockImages to update.
     */
    limit?: number
  }

  /**
   * AnnouncementBlockImage updateManyAndReturn
   */
  export type AnnouncementBlockImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * The data used to update AnnouncementBlockImages.
     */
    data: XOR<AnnouncementBlockImageUpdateManyMutationInput, AnnouncementBlockImageUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementBlockImages to update
     */
    where?: AnnouncementBlockImageWhereInput
    /**
     * Limit how many AnnouncementBlockImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementBlockImage upsert
   */
  export type AnnouncementBlockImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    /**
     * The filter to search for the AnnouncementBlockImage to update in case it exists.
     */
    where: AnnouncementBlockImageWhereUniqueInput
    /**
     * In case the AnnouncementBlockImage found by the `where` argument doesn't exist, create a new AnnouncementBlockImage with this data.
     */
    create: XOR<AnnouncementBlockImageCreateInput, AnnouncementBlockImageUncheckedCreateInput>
    /**
     * In case the AnnouncementBlockImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementBlockImageUpdateInput, AnnouncementBlockImageUncheckedUpdateInput>
  }

  /**
   * AnnouncementBlockImage delete
   */
  export type AnnouncementBlockImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
    /**
     * Filter which AnnouncementBlockImage to delete.
     */
    where: AnnouncementBlockImageWhereUniqueInput
  }

  /**
   * AnnouncementBlockImage deleteMany
   */
  export type AnnouncementBlockImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementBlockImages to delete
     */
    where?: AnnouncementBlockImageWhereInput
    /**
     * Limit how many AnnouncementBlockImages to delete.
     */
    limit?: number
  }

  /**
   * AnnouncementBlockImage without action
   */
  export type AnnouncementBlockImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementBlockImage
     */
    select?: AnnouncementBlockImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementBlockImage
     */
    omit?: AnnouncementBlockImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementBlockImageInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: bigint | null
  }

  export type ContactMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: bigint
    name: string
    email: string
    phone: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      email: string
      phone: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'BigInt'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly created_at: FieldRef<"Contact", 'DateTime'>
    readonly updated_at: FieldRef<"Contact", 'DateTime'>
    readonly deleted_at: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model MassSchedules
   */

  export type AggregateMassSchedules = {
    _count: MassSchedulesCountAggregateOutputType | null
    _avg: MassSchedulesAvgAggregateOutputType | null
    _sum: MassSchedulesSumAggregateOutputType | null
    _min: MassSchedulesMinAggregateOutputType | null
    _max: MassSchedulesMaxAggregateOutputType | null
  }

  export type MassSchedulesAvgAggregateOutputType = {
    id: number | null
  }

  export type MassSchedulesSumAggregateOutputType = {
    id: bigint | null
  }

  export type MassSchedulesMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    mass_date: Date | null
    mass_time: Date | null
    liturgical_color: string | null
    first_reading: string | null
    second_reading: string | null
    celebrant: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type MassSchedulesMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    mass_date: Date | null
    mass_time: Date | null
    liturgical_color: string | null
    first_reading: string | null
    second_reading: string | null
    celebrant: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type MassSchedulesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    mass_date: number
    mass_time: number
    liturgical_color: number
    first_reading: number
    second_reading: number
    celebrant: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type MassSchedulesAvgAggregateInputType = {
    id?: true
  }

  export type MassSchedulesSumAggregateInputType = {
    id?: true
  }

  export type MassSchedulesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mass_date?: true
    mass_time?: true
    liturgical_color?: true
    first_reading?: true
    second_reading?: true
    celebrant?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type MassSchedulesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mass_date?: true
    mass_time?: true
    liturgical_color?: true
    first_reading?: true
    second_reading?: true
    celebrant?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type MassSchedulesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mass_date?: true
    mass_time?: true
    liturgical_color?: true
    first_reading?: true
    second_reading?: true
    celebrant?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type MassSchedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MassSchedules to aggregate.
     */
    where?: MassSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MassSchedules to fetch.
     */
    orderBy?: MassSchedulesOrderByWithRelationInput | MassSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MassSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MassSchedules
    **/
    _count?: true | MassSchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MassSchedulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MassSchedulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MassSchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MassSchedulesMaxAggregateInputType
  }

  export type GetMassSchedulesAggregateType<T extends MassSchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateMassSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMassSchedules[P]>
      : GetScalarType<T[P], AggregateMassSchedules[P]>
  }




  export type MassSchedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MassSchedulesWhereInput
    orderBy?: MassSchedulesOrderByWithAggregationInput | MassSchedulesOrderByWithAggregationInput[]
    by: MassSchedulesScalarFieldEnum[] | MassSchedulesScalarFieldEnum
    having?: MassSchedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MassSchedulesCountAggregateInputType | true
    _avg?: MassSchedulesAvgAggregateInputType
    _sum?: MassSchedulesSumAggregateInputType
    _min?: MassSchedulesMinAggregateInputType
    _max?: MassSchedulesMaxAggregateInputType
  }

  export type MassSchedulesGroupByOutputType = {
    id: bigint
    title: string
    description: string
    mass_date: Date
    mass_time: Date
    liturgical_color: string | null
    first_reading: string | null
    second_reading: string | null
    celebrant: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: MassSchedulesCountAggregateOutputType | null
    _avg: MassSchedulesAvgAggregateOutputType | null
    _sum: MassSchedulesSumAggregateOutputType | null
    _min: MassSchedulesMinAggregateOutputType | null
    _max: MassSchedulesMaxAggregateOutputType | null
  }

  type GetMassSchedulesGroupByPayload<T extends MassSchedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MassSchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MassSchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MassSchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], MassSchedulesGroupByOutputType[P]>
        }
      >
    >


  export type MassSchedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mass_date?: boolean
    mass_time?: boolean
    liturgical_color?: boolean
    first_reading?: boolean
    second_reading?: boolean
    celebrant?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["massSchedules"]>

  export type MassSchedulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mass_date?: boolean
    mass_time?: boolean
    liturgical_color?: boolean
    first_reading?: boolean
    second_reading?: boolean
    celebrant?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["massSchedules"]>

  export type MassSchedulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mass_date?: boolean
    mass_time?: boolean
    liturgical_color?: boolean
    first_reading?: boolean
    second_reading?: boolean
    celebrant?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["massSchedules"]>

  export type MassSchedulesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    mass_date?: boolean
    mass_time?: boolean
    liturgical_color?: boolean
    first_reading?: boolean
    second_reading?: boolean
    celebrant?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type MassSchedulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "mass_date" | "mass_time" | "liturgical_color" | "first_reading" | "second_reading" | "celebrant" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["massSchedules"]>

  export type $MassSchedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MassSchedules"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      description: string
      mass_date: Date
      mass_time: Date
      liturgical_color: string | null
      first_reading: string | null
      second_reading: string | null
      celebrant: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["massSchedules"]>
    composites: {}
  }

  type MassSchedulesGetPayload<S extends boolean | null | undefined | MassSchedulesDefaultArgs> = $Result.GetResult<Prisma.$MassSchedulesPayload, S>

  type MassSchedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MassSchedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MassSchedulesCountAggregateInputType | true
    }

  export interface MassSchedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MassSchedules'], meta: { name: 'MassSchedules' } }
    /**
     * Find zero or one MassSchedules that matches the filter.
     * @param {MassSchedulesFindUniqueArgs} args - Arguments to find a MassSchedules
     * @example
     * // Get one MassSchedules
     * const massSchedules = await prisma.massSchedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MassSchedulesFindUniqueArgs>(args: SelectSubset<T, MassSchedulesFindUniqueArgs<ExtArgs>>): Prisma__MassSchedulesClient<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MassSchedules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MassSchedulesFindUniqueOrThrowArgs} args - Arguments to find a MassSchedules
     * @example
     * // Get one MassSchedules
     * const massSchedules = await prisma.massSchedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MassSchedulesFindUniqueOrThrowArgs>(args: SelectSubset<T, MassSchedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MassSchedulesClient<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MassSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassSchedulesFindFirstArgs} args - Arguments to find a MassSchedules
     * @example
     * // Get one MassSchedules
     * const massSchedules = await prisma.massSchedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MassSchedulesFindFirstArgs>(args?: SelectSubset<T, MassSchedulesFindFirstArgs<ExtArgs>>): Prisma__MassSchedulesClient<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MassSchedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassSchedulesFindFirstOrThrowArgs} args - Arguments to find a MassSchedules
     * @example
     * // Get one MassSchedules
     * const massSchedules = await prisma.massSchedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MassSchedulesFindFirstOrThrowArgs>(args?: SelectSubset<T, MassSchedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MassSchedulesClient<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MassSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassSchedulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MassSchedules
     * const massSchedules = await prisma.massSchedules.findMany()
     * 
     * // Get first 10 MassSchedules
     * const massSchedules = await prisma.massSchedules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const massSchedulesWithIdOnly = await prisma.massSchedules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MassSchedulesFindManyArgs>(args?: SelectSubset<T, MassSchedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MassSchedules.
     * @param {MassSchedulesCreateArgs} args - Arguments to create a MassSchedules.
     * @example
     * // Create one MassSchedules
     * const MassSchedules = await prisma.massSchedules.create({
     *   data: {
     *     // ... data to create a MassSchedules
     *   }
     * })
     * 
     */
    create<T extends MassSchedulesCreateArgs>(args: SelectSubset<T, MassSchedulesCreateArgs<ExtArgs>>): Prisma__MassSchedulesClient<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MassSchedules.
     * @param {MassSchedulesCreateManyArgs} args - Arguments to create many MassSchedules.
     * @example
     * // Create many MassSchedules
     * const massSchedules = await prisma.massSchedules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MassSchedulesCreateManyArgs>(args?: SelectSubset<T, MassSchedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MassSchedules and returns the data saved in the database.
     * @param {MassSchedulesCreateManyAndReturnArgs} args - Arguments to create many MassSchedules.
     * @example
     * // Create many MassSchedules
     * const massSchedules = await prisma.massSchedules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MassSchedules and only return the `id`
     * const massSchedulesWithIdOnly = await prisma.massSchedules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MassSchedulesCreateManyAndReturnArgs>(args?: SelectSubset<T, MassSchedulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MassSchedules.
     * @param {MassSchedulesDeleteArgs} args - Arguments to delete one MassSchedules.
     * @example
     * // Delete one MassSchedules
     * const MassSchedules = await prisma.massSchedules.delete({
     *   where: {
     *     // ... filter to delete one MassSchedules
     *   }
     * })
     * 
     */
    delete<T extends MassSchedulesDeleteArgs>(args: SelectSubset<T, MassSchedulesDeleteArgs<ExtArgs>>): Prisma__MassSchedulesClient<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MassSchedules.
     * @param {MassSchedulesUpdateArgs} args - Arguments to update one MassSchedules.
     * @example
     * // Update one MassSchedules
     * const massSchedules = await prisma.massSchedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MassSchedulesUpdateArgs>(args: SelectSubset<T, MassSchedulesUpdateArgs<ExtArgs>>): Prisma__MassSchedulesClient<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MassSchedules.
     * @param {MassSchedulesDeleteManyArgs} args - Arguments to filter MassSchedules to delete.
     * @example
     * // Delete a few MassSchedules
     * const { count } = await prisma.massSchedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MassSchedulesDeleteManyArgs>(args?: SelectSubset<T, MassSchedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassSchedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MassSchedules
     * const massSchedules = await prisma.massSchedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MassSchedulesUpdateManyArgs>(args: SelectSubset<T, MassSchedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MassSchedules and returns the data updated in the database.
     * @param {MassSchedulesUpdateManyAndReturnArgs} args - Arguments to update many MassSchedules.
     * @example
     * // Update many MassSchedules
     * const massSchedules = await prisma.massSchedules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MassSchedules and only return the `id`
     * const massSchedulesWithIdOnly = await prisma.massSchedules.updateManyAndReturn({
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
    updateManyAndReturn<T extends MassSchedulesUpdateManyAndReturnArgs>(args: SelectSubset<T, MassSchedulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MassSchedules.
     * @param {MassSchedulesUpsertArgs} args - Arguments to update or create a MassSchedules.
     * @example
     * // Update or create a MassSchedules
     * const massSchedules = await prisma.massSchedules.upsert({
     *   create: {
     *     // ... data to create a MassSchedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MassSchedules we want to update
     *   }
     * })
     */
    upsert<T extends MassSchedulesUpsertArgs>(args: SelectSubset<T, MassSchedulesUpsertArgs<ExtArgs>>): Prisma__MassSchedulesClient<$Result.GetResult<Prisma.$MassSchedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassSchedulesCountArgs} args - Arguments to filter MassSchedules to count.
     * @example
     * // Count the number of MassSchedules
     * const count = await prisma.massSchedules.count({
     *   where: {
     *     // ... the filter for the MassSchedules we want to count
     *   }
     * })
    **/
    count<T extends MassSchedulesCountArgs>(
      args?: Subset<T, MassSchedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MassSchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassSchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MassSchedulesAggregateArgs>(args: Subset<T, MassSchedulesAggregateArgs>): Prisma.PrismaPromise<GetMassSchedulesAggregateType<T>>

    /**
     * Group by MassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassSchedulesGroupByArgs} args - Group by arguments.
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
      T extends MassSchedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MassSchedulesGroupByArgs['orderBy'] }
        : { orderBy?: MassSchedulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MassSchedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMassSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MassSchedules model
   */
  readonly fields: MassSchedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MassSchedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MassSchedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MassSchedules model
   */
  interface MassSchedulesFieldRefs {
    readonly id: FieldRef<"MassSchedules", 'BigInt'>
    readonly title: FieldRef<"MassSchedules", 'String'>
    readonly description: FieldRef<"MassSchedules", 'String'>
    readonly mass_date: FieldRef<"MassSchedules", 'DateTime'>
    readonly mass_time: FieldRef<"MassSchedules", 'DateTime'>
    readonly liturgical_color: FieldRef<"MassSchedules", 'String'>
    readonly first_reading: FieldRef<"MassSchedules", 'String'>
    readonly second_reading: FieldRef<"MassSchedules", 'String'>
    readonly celebrant: FieldRef<"MassSchedules", 'String'>
    readonly created_at: FieldRef<"MassSchedules", 'DateTime'>
    readonly updated_at: FieldRef<"MassSchedules", 'DateTime'>
    readonly deleted_at: FieldRef<"MassSchedules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MassSchedules findUnique
   */
  export type MassSchedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * Filter, which MassSchedules to fetch.
     */
    where: MassSchedulesWhereUniqueInput
  }

  /**
   * MassSchedules findUniqueOrThrow
   */
  export type MassSchedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * Filter, which MassSchedules to fetch.
     */
    where: MassSchedulesWhereUniqueInput
  }

  /**
   * MassSchedules findFirst
   */
  export type MassSchedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * Filter, which MassSchedules to fetch.
     */
    where?: MassSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MassSchedules to fetch.
     */
    orderBy?: MassSchedulesOrderByWithRelationInput | MassSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MassSchedules.
     */
    cursor?: MassSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MassSchedules.
     */
    distinct?: MassSchedulesScalarFieldEnum | MassSchedulesScalarFieldEnum[]
  }

  /**
   * MassSchedules findFirstOrThrow
   */
  export type MassSchedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * Filter, which MassSchedules to fetch.
     */
    where?: MassSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MassSchedules to fetch.
     */
    orderBy?: MassSchedulesOrderByWithRelationInput | MassSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MassSchedules.
     */
    cursor?: MassSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MassSchedules.
     */
    distinct?: MassSchedulesScalarFieldEnum | MassSchedulesScalarFieldEnum[]
  }

  /**
   * MassSchedules findMany
   */
  export type MassSchedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * Filter, which MassSchedules to fetch.
     */
    where?: MassSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MassSchedules to fetch.
     */
    orderBy?: MassSchedulesOrderByWithRelationInput | MassSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MassSchedules.
     */
    cursor?: MassSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MassSchedules.
     */
    skip?: number
    distinct?: MassSchedulesScalarFieldEnum | MassSchedulesScalarFieldEnum[]
  }

  /**
   * MassSchedules create
   */
  export type MassSchedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * The data needed to create a MassSchedules.
     */
    data: XOR<MassSchedulesCreateInput, MassSchedulesUncheckedCreateInput>
  }

  /**
   * MassSchedules createMany
   */
  export type MassSchedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MassSchedules.
     */
    data: MassSchedulesCreateManyInput | MassSchedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MassSchedules createManyAndReturn
   */
  export type MassSchedulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * The data used to create many MassSchedules.
     */
    data: MassSchedulesCreateManyInput | MassSchedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MassSchedules update
   */
  export type MassSchedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * The data needed to update a MassSchedules.
     */
    data: XOR<MassSchedulesUpdateInput, MassSchedulesUncheckedUpdateInput>
    /**
     * Choose, which MassSchedules to update.
     */
    where: MassSchedulesWhereUniqueInput
  }

  /**
   * MassSchedules updateMany
   */
  export type MassSchedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MassSchedules.
     */
    data: XOR<MassSchedulesUpdateManyMutationInput, MassSchedulesUncheckedUpdateManyInput>
    /**
     * Filter which MassSchedules to update
     */
    where?: MassSchedulesWhereInput
    /**
     * Limit how many MassSchedules to update.
     */
    limit?: number
  }

  /**
   * MassSchedules updateManyAndReturn
   */
  export type MassSchedulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * The data used to update MassSchedules.
     */
    data: XOR<MassSchedulesUpdateManyMutationInput, MassSchedulesUncheckedUpdateManyInput>
    /**
     * Filter which MassSchedules to update
     */
    where?: MassSchedulesWhereInput
    /**
     * Limit how many MassSchedules to update.
     */
    limit?: number
  }

  /**
   * MassSchedules upsert
   */
  export type MassSchedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * The filter to search for the MassSchedules to update in case it exists.
     */
    where: MassSchedulesWhereUniqueInput
    /**
     * In case the MassSchedules found by the `where` argument doesn't exist, create a new MassSchedules with this data.
     */
    create: XOR<MassSchedulesCreateInput, MassSchedulesUncheckedCreateInput>
    /**
     * In case the MassSchedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MassSchedulesUpdateInput, MassSchedulesUncheckedUpdateInput>
  }

  /**
   * MassSchedules delete
   */
  export type MassSchedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
    /**
     * Filter which MassSchedules to delete.
     */
    where: MassSchedulesWhereUniqueInput
  }

  /**
   * MassSchedules deleteMany
   */
  export type MassSchedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MassSchedules to delete
     */
    where?: MassSchedulesWhereInput
    /**
     * Limit how many MassSchedules to delete.
     */
    limit?: number
  }

  /**
   * MassSchedules without action
   */
  export type MassSchedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedules
     */
    select?: MassSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedules
     */
    omit?: MassSchedulesOmit<ExtArgs> | null
  }


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
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    role_id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password: string | null
    role_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password: string | null
    role_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
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
    id: bigint
    name: string
    email: string
    password: string
    role_id: bigint
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      email: string
      password: string
      role_id: bigint
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
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
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'BigInt'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role_id: FieldRef<"User", 'BigInt'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: bigint | null
  }

  export type RoleMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: bigint
    name: string
    description: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | Role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Role$userArgs<ExtArgs> = {}>(args?: Subset<T, Role$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'BigInt'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly created_at: FieldRef<"Role", 'DateTime'>
    readonly updated_at: FieldRef<"Role", 'DateTime'>
    readonly deleted_at: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.user
   */
  export type Role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    member_count: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: bigint | null
    member_count: bigint | null
  }

  export type GroupMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    member_count: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    member_count: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    member_count: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    member_count?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    member_count?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    member_count?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    member_count?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    member_count?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: bigint
    name: string
    description: string
    member_count: bigint
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    member_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    member_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    member_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    member_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "member_count" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["group"]>

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
      member_count: bigint
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'BigInt'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly member_count: FieldRef<"Group", 'BigInt'>
    readonly created_at: FieldRef<"Group", 'DateTime'>
    readonly updated_at: FieldRef<"Group", 'DateTime'>
    readonly deleted_at: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
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


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const AnnouncementBlockScalarFieldEnum: {
    id: 'id',
    announcement_id: 'announcement_id',
    content: 'content',
    order: 'order'
  };

  export type AnnouncementBlockScalarFieldEnum = (typeof AnnouncementBlockScalarFieldEnum)[keyof typeof AnnouncementBlockScalarFieldEnum]


  export const AnnouncementBlockImageScalarFieldEnum: {
    id: 'id',
    announcement_block_id: 'announcement_block_id',
    image_id: 'image_id',
    order: 'order'
  };

  export type AnnouncementBlockImageScalarFieldEnum = (typeof AnnouncementBlockImageScalarFieldEnum)[keyof typeof AnnouncementBlockImageScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const MassSchedulesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    mass_date: 'mass_date',
    mass_time: 'mass_time',
    liturgical_color: 'liturgical_color',
    first_reading: 'first_reading',
    second_reading: 'second_reading',
    celebrant: 'celebrant',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type MassSchedulesScalarFieldEnum = (typeof MassSchedulesScalarFieldEnum)[keyof typeof MassSchedulesScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role_id: 'role_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    member_count: 'member_count',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


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
    AnnouncementBlockImages?: AnnouncementBlockImageListRelationFilter
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
    AnnouncementBlockImages?: AnnouncementBlockImageOrderByRelationAggregateInput
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
    AnnouncementBlockImages?: AnnouncementBlockImageListRelationFilter
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

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: BigIntFilter<"Announcement"> | bigint | number
    title?: StringNullableFilter<"Announcement"> | string | null
    status?: BoolFilter<"Announcement"> | boolean
    created_at?: DateTimeFilter<"Announcement"> | Date | string
    updated_at?: DateTimeFilter<"Announcement"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    announcement_blocks?: AnnouncementBlockListRelationFilter
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    announcement_blocks?: AnnouncementBlockOrderByRelationAggregateInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringNullableFilter<"Announcement"> | string | null
    status?: BoolFilter<"Announcement"> | boolean
    created_at?: DateTimeFilter<"Announcement"> | Date | string
    updated_at?: DateTimeFilter<"Announcement"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    announcement_blocks?: AnnouncementBlockListRelationFilter
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Announcement"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"Announcement"> | string | null
    status?: BoolWithAggregatesFilter<"Announcement"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Announcement"> | Date | string | null
  }

  export type AnnouncementBlockWhereInput = {
    AND?: AnnouncementBlockWhereInput | AnnouncementBlockWhereInput[]
    OR?: AnnouncementBlockWhereInput[]
    NOT?: AnnouncementBlockWhereInput | AnnouncementBlockWhereInput[]
    id?: BigIntFilter<"AnnouncementBlock"> | bigint | number
    announcement_id?: BigIntFilter<"AnnouncementBlock"> | bigint | number
    content?: StringNullableFilter<"AnnouncementBlock"> | string | null
    order?: BigIntFilter<"AnnouncementBlock"> | bigint | number
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    announcement_block_images?: AnnouncementBlockImageListRelationFilter
  }

  export type AnnouncementBlockOrderByWithRelationInput = {
    id?: SortOrder
    announcement_id?: SortOrder
    content?: SortOrderInput | SortOrder
    order?: SortOrder
    announcement?: AnnouncementOrderByWithRelationInput
    announcement_block_images?: AnnouncementBlockImageOrderByRelationAggregateInput
  }

  export type AnnouncementBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AnnouncementBlockWhereInput | AnnouncementBlockWhereInput[]
    OR?: AnnouncementBlockWhereInput[]
    NOT?: AnnouncementBlockWhereInput | AnnouncementBlockWhereInput[]
    announcement_id?: BigIntFilter<"AnnouncementBlock"> | bigint | number
    content?: StringNullableFilter<"AnnouncementBlock"> | string | null
    order?: BigIntFilter<"AnnouncementBlock"> | bigint | number
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    announcement_block_images?: AnnouncementBlockImageListRelationFilter
  }, "id">

  export type AnnouncementBlockOrderByWithAggregationInput = {
    id?: SortOrder
    announcement_id?: SortOrder
    content?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: AnnouncementBlockCountOrderByAggregateInput
    _avg?: AnnouncementBlockAvgOrderByAggregateInput
    _max?: AnnouncementBlockMaxOrderByAggregateInput
    _min?: AnnouncementBlockMinOrderByAggregateInput
    _sum?: AnnouncementBlockSumOrderByAggregateInput
  }

  export type AnnouncementBlockScalarWhereWithAggregatesInput = {
    AND?: AnnouncementBlockScalarWhereWithAggregatesInput | AnnouncementBlockScalarWhereWithAggregatesInput[]
    OR?: AnnouncementBlockScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementBlockScalarWhereWithAggregatesInput | AnnouncementBlockScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"AnnouncementBlock"> | bigint | number
    announcement_id?: BigIntWithAggregatesFilter<"AnnouncementBlock"> | bigint | number
    content?: StringNullableWithAggregatesFilter<"AnnouncementBlock"> | string | null
    order?: BigIntWithAggregatesFilter<"AnnouncementBlock"> | bigint | number
  }

  export type AnnouncementBlockImageWhereInput = {
    AND?: AnnouncementBlockImageWhereInput | AnnouncementBlockImageWhereInput[]
    OR?: AnnouncementBlockImageWhereInput[]
    NOT?: AnnouncementBlockImageWhereInput | AnnouncementBlockImageWhereInput[]
    id?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    announcement_block_id?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    image_id?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    order?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    announcement_block?: XOR<AnnouncementBlockScalarRelationFilter, AnnouncementBlockWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type AnnouncementBlockImageOrderByWithRelationInput = {
    id?: SortOrder
    announcement_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
    announcement_block?: AnnouncementBlockOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type AnnouncementBlockImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AnnouncementBlockImageWhereInput | AnnouncementBlockImageWhereInput[]
    OR?: AnnouncementBlockImageWhereInput[]
    NOT?: AnnouncementBlockImageWhereInput | AnnouncementBlockImageWhereInput[]
    announcement_block_id?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    image_id?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    order?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    announcement_block?: XOR<AnnouncementBlockScalarRelationFilter, AnnouncementBlockWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id">

  export type AnnouncementBlockImageOrderByWithAggregationInput = {
    id?: SortOrder
    announcement_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
    _count?: AnnouncementBlockImageCountOrderByAggregateInput
    _avg?: AnnouncementBlockImageAvgOrderByAggregateInput
    _max?: AnnouncementBlockImageMaxOrderByAggregateInput
    _min?: AnnouncementBlockImageMinOrderByAggregateInput
    _sum?: AnnouncementBlockImageSumOrderByAggregateInput
  }

  export type AnnouncementBlockImageScalarWhereWithAggregatesInput = {
    AND?: AnnouncementBlockImageScalarWhereWithAggregatesInput | AnnouncementBlockImageScalarWhereWithAggregatesInput[]
    OR?: AnnouncementBlockImageScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementBlockImageScalarWhereWithAggregatesInput | AnnouncementBlockImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"AnnouncementBlockImage"> | bigint | number
    announcement_block_id?: BigIntWithAggregatesFilter<"AnnouncementBlockImage"> | bigint | number
    image_id?: BigIntWithAggregatesFilter<"AnnouncementBlockImage"> | bigint | number
    order?: BigIntWithAggregatesFilter<"AnnouncementBlockImage"> | bigint | number
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: BigIntFilter<"Contact"> | bigint | number
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    created_at?: DateTimeFilter<"Contact"> | Date | string
    updated_at?: DateTimeFilter<"Contact"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Contact"> | Date | string | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    created_at?: DateTimeFilter<"Contact"> | Date | string
    updated_at?: DateTimeFilter<"Contact"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Contact"> | Date | string | null
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Contact"> | bigint | number
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringWithAggregatesFilter<"Contact"> | string
    created_at?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Contact"> | Date | string | null
  }

  export type MassSchedulesWhereInput = {
    AND?: MassSchedulesWhereInput | MassSchedulesWhereInput[]
    OR?: MassSchedulesWhereInput[]
    NOT?: MassSchedulesWhereInput | MassSchedulesWhereInput[]
    id?: BigIntFilter<"MassSchedules"> | bigint | number
    title?: StringFilter<"MassSchedules"> | string
    description?: StringFilter<"MassSchedules"> | string
    mass_date?: DateTimeFilter<"MassSchedules"> | Date | string
    mass_time?: DateTimeFilter<"MassSchedules"> | Date | string
    liturgical_color?: StringNullableFilter<"MassSchedules"> | string | null
    first_reading?: StringNullableFilter<"MassSchedules"> | string | null
    second_reading?: StringNullableFilter<"MassSchedules"> | string | null
    celebrant?: StringNullableFilter<"MassSchedules"> | string | null
    created_at?: DateTimeFilter<"MassSchedules"> | Date | string
    updated_at?: DateTimeFilter<"MassSchedules"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MassSchedules"> | Date | string | null
  }

  export type MassSchedulesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mass_date?: SortOrder
    mass_time?: SortOrder
    liturgical_color?: SortOrderInput | SortOrder
    first_reading?: SortOrderInput | SortOrder
    second_reading?: SortOrderInput | SortOrder
    celebrant?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type MassSchedulesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MassSchedulesWhereInput | MassSchedulesWhereInput[]
    OR?: MassSchedulesWhereInput[]
    NOT?: MassSchedulesWhereInput | MassSchedulesWhereInput[]
    title?: StringFilter<"MassSchedules"> | string
    description?: StringFilter<"MassSchedules"> | string
    mass_date?: DateTimeFilter<"MassSchedules"> | Date | string
    mass_time?: DateTimeFilter<"MassSchedules"> | Date | string
    liturgical_color?: StringNullableFilter<"MassSchedules"> | string | null
    first_reading?: StringNullableFilter<"MassSchedules"> | string | null
    second_reading?: StringNullableFilter<"MassSchedules"> | string | null
    celebrant?: StringNullableFilter<"MassSchedules"> | string | null
    created_at?: DateTimeFilter<"MassSchedules"> | Date | string
    updated_at?: DateTimeFilter<"MassSchedules"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MassSchedules"> | Date | string | null
  }, "id">

  export type MassSchedulesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mass_date?: SortOrder
    mass_time?: SortOrder
    liturgical_color?: SortOrderInput | SortOrder
    first_reading?: SortOrderInput | SortOrder
    second_reading?: SortOrderInput | SortOrder
    celebrant?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: MassSchedulesCountOrderByAggregateInput
    _avg?: MassSchedulesAvgOrderByAggregateInput
    _max?: MassSchedulesMaxOrderByAggregateInput
    _min?: MassSchedulesMinOrderByAggregateInput
    _sum?: MassSchedulesSumOrderByAggregateInput
  }

  export type MassSchedulesScalarWhereWithAggregatesInput = {
    AND?: MassSchedulesScalarWhereWithAggregatesInput | MassSchedulesScalarWhereWithAggregatesInput[]
    OR?: MassSchedulesScalarWhereWithAggregatesInput[]
    NOT?: MassSchedulesScalarWhereWithAggregatesInput | MassSchedulesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"MassSchedules"> | bigint | number
    title?: StringWithAggregatesFilter<"MassSchedules"> | string
    description?: StringWithAggregatesFilter<"MassSchedules"> | string
    mass_date?: DateTimeWithAggregatesFilter<"MassSchedules"> | Date | string
    mass_time?: DateTimeWithAggregatesFilter<"MassSchedules"> | Date | string
    liturgical_color?: StringNullableWithAggregatesFilter<"MassSchedules"> | string | null
    first_reading?: StringNullableWithAggregatesFilter<"MassSchedules"> | string | null
    second_reading?: StringNullableWithAggregatesFilter<"MassSchedules"> | string | null
    celebrant?: StringNullableWithAggregatesFilter<"MassSchedules"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"MassSchedules"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MassSchedules"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"MassSchedules"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role_id?: BigIntFilter<"User"> | bigint | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role_id?: BigIntFilter<"User"> | bigint | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
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
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role_id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: BigIntFilter<"Role"> | bigint | number
    name?: StringFilter<"Role"> | string
    description?: StringFilter<"Role"> | string
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Role"> | Date | string | null
    user?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    description?: StringFilter<"Role"> | string
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Role"> | Date | string | null
    user?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Role"> | bigint | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringWithAggregatesFilter<"Role"> | string
    created_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: BigIntFilter<"Group"> | bigint | number
    name?: StringFilter<"Group"> | string
    description?: StringFilter<"Group"> | string
    member_count?: BigIntFilter<"Group"> | bigint | number
    created_at?: DateTimeFilter<"Group"> | Date | string
    updated_at?: DateTimeFilter<"Group"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Group"> | Date | string | null
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    member_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    description?: StringFilter<"Group"> | string
    member_count?: BigIntFilter<"Group"> | bigint | number
    created_at?: DateTimeFilter<"Group"> | Date | string
    updated_at?: DateTimeFilter<"Group"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Group"> | Date | string | null
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    member_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Group"> | bigint | number
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringWithAggregatesFilter<"Group"> | string
    member_count?: BigIntWithAggregatesFilter<"Group"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Group"> | Date | string | null
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
    AnnouncementBlockImages?: AnnouncementBlockImageCreateNestedManyWithoutImageInput
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
    AnnouncementBlockImages?: AnnouncementBlockImageUncheckedCreateNestedManyWithoutImageInput
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
    AnnouncementBlockImages?: AnnouncementBlockImageUpdateManyWithoutImageNestedInput
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
    AnnouncementBlockImages?: AnnouncementBlockImageUncheckedUpdateManyWithoutImageNestedInput
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

  export type AnnouncementCreateInput = {
    id?: bigint | number
    title?: string | null
    status: boolean
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    announcement_blocks?: AnnouncementBlockCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: bigint | number
    title?: string | null
    status: boolean
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    announcement_blocks?: AnnouncementBlockUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcement_blocks?: AnnouncementBlockUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcement_blocks?: AnnouncementBlockUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementCreateManyInput = {
    id?: bigint | number
    title?: string | null
    status: boolean
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementBlockCreateInput = {
    id?: bigint | number
    content?: string | null
    order: bigint | number
    announcement: AnnouncementCreateNestedOneWithoutAnnouncement_blocksInput
    announcement_block_images?: AnnouncementBlockImageCreateNestedManyWithoutAnnouncement_blockInput
  }

  export type AnnouncementBlockUncheckedCreateInput = {
    id?: bigint | number
    announcement_id: bigint | number
    content?: string | null
    order: bigint | number
    announcement_block_images?: AnnouncementBlockImageUncheckedCreateNestedManyWithoutAnnouncement_blockInput
  }

  export type AnnouncementBlockUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement?: AnnouncementUpdateOneRequiredWithoutAnnouncement_blocksNestedInput
    announcement_block_images?: AnnouncementBlockImageUpdateManyWithoutAnnouncement_blockNestedInput
  }

  export type AnnouncementBlockUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_block_images?: AnnouncementBlockImageUncheckedUpdateManyWithoutAnnouncement_blockNestedInput
  }

  export type AnnouncementBlockCreateManyInput = {
    id?: bigint | number
    announcement_id: bigint | number
    content?: string | null
    order: bigint | number
  }

  export type AnnouncementBlockUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AnnouncementBlockUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AnnouncementBlockImageCreateInput = {
    id?: bigint | number
    order: bigint | number
    announcement_block: AnnouncementBlockCreateNestedOneWithoutAnnouncement_block_imagesInput
    image: ImageCreateNestedOneWithoutAnnouncementBlockImagesInput
  }

  export type AnnouncementBlockImageUncheckedCreateInput = {
    id?: bigint | number
    announcement_block_id: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type AnnouncementBlockImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_block?: AnnouncementBlockUpdateOneRequiredWithoutAnnouncement_block_imagesNestedInput
    image?: ImageUpdateOneRequiredWithoutAnnouncementBlockImagesNestedInput
  }

  export type AnnouncementBlockImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AnnouncementBlockImageCreateManyInput = {
    id?: bigint | number
    announcement_block_id: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type AnnouncementBlockImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AnnouncementBlockImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ContactCreateInput = {
    id?: bigint | number
    name: string
    email: string
    phone: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type ContactUncheckedCreateInput = {
    id?: bigint | number
    name: string
    email: string
    phone: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type ContactUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactCreateManyInput = {
    id?: bigint | number
    name: string
    email: string
    phone: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type ContactUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MassSchedulesCreateInput = {
    id?: bigint | number
    title: string
    description: string
    mass_date: Date | string
    mass_time: Date | string
    liturgical_color?: string | null
    first_reading?: string | null
    second_reading?: string | null
    celebrant?: string | null
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type MassSchedulesUncheckedCreateInput = {
    id?: bigint | number
    title: string
    description: string
    mass_date: Date | string
    mass_time: Date | string
    liturgical_color?: string | null
    first_reading?: string | null
    second_reading?: string | null
    celebrant?: string | null
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type MassSchedulesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mass_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mass_time?: DateTimeFieldUpdateOperationsInput | Date | string
    liturgical_color?: NullableStringFieldUpdateOperationsInput | string | null
    first_reading?: NullableStringFieldUpdateOperationsInput | string | null
    second_reading?: NullableStringFieldUpdateOperationsInput | string | null
    celebrant?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MassSchedulesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mass_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mass_time?: DateTimeFieldUpdateOperationsInput | Date | string
    liturgical_color?: NullableStringFieldUpdateOperationsInput | string | null
    first_reading?: NullableStringFieldUpdateOperationsInput | string | null
    second_reading?: NullableStringFieldUpdateOperationsInput | string | null
    celebrant?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MassSchedulesCreateManyInput = {
    id?: bigint | number
    title: string
    description: string
    mass_date: Date | string
    mass_time: Date | string
    liturgical_color?: string | null
    first_reading?: string | null
    second_reading?: string | null
    celebrant?: string | null
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type MassSchedulesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mass_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mass_time?: DateTimeFieldUpdateOperationsInput | Date | string
    liturgical_color?: NullableStringFieldUpdateOperationsInput | string | null
    first_reading?: NullableStringFieldUpdateOperationsInput | string | null
    second_reading?: NullableStringFieldUpdateOperationsInput | string | null
    celebrant?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MassSchedulesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mass_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mass_time?: DateTimeFieldUpdateOperationsInput | Date | string
    liturgical_color?: NullableStringFieldUpdateOperationsInput | string | null
    first_reading?: NullableStringFieldUpdateOperationsInput | string | null
    second_reading?: NullableStringFieldUpdateOperationsInput | string | null
    celebrant?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    role_id: bigint | number
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    role_id: bigint | number
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleCreateInput = {
    id?: bigint | number
    name: string
    description: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    user?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type RoleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupCreateInput = {
    id?: bigint | number
    name: string
    description: string
    member_count: bigint | number
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type GroupUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    member_count: bigint | number
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type GroupUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    member_count?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    member_count?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
    member_count: bigint | number
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type GroupUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    member_count?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    member_count?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type AnnouncementBlockImageListRelationFilter = {
    every?: AnnouncementBlockImageWhereInput
    some?: AnnouncementBlockImageWhereInput
    none?: AnnouncementBlockImageWhereInput
  }

  export type SermonBlockImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementBlockImageOrderByRelationAggregateInput = {
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

  export type AnnouncementBlockListRelationFilter = {
    every?: AnnouncementBlockWhereInput
    some?: AnnouncementBlockWhereInput
    none?: AnnouncementBlockWhereInput
  }

  export type AnnouncementBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnnouncementScalarRelationFilter = {
    is?: AnnouncementWhereInput
    isNot?: AnnouncementWhereInput
  }

  export type AnnouncementBlockCountOrderByAggregateInput = {
    id?: SortOrder
    announcement_id?: SortOrder
    content?: SortOrder
    order?: SortOrder
  }

  export type AnnouncementBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    announcement_id?: SortOrder
    order?: SortOrder
  }

  export type AnnouncementBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    announcement_id?: SortOrder
    content?: SortOrder
    order?: SortOrder
  }

  export type AnnouncementBlockMinOrderByAggregateInput = {
    id?: SortOrder
    announcement_id?: SortOrder
    content?: SortOrder
    order?: SortOrder
  }

  export type AnnouncementBlockSumOrderByAggregateInput = {
    id?: SortOrder
    announcement_id?: SortOrder
    order?: SortOrder
  }

  export type AnnouncementBlockScalarRelationFilter = {
    is?: AnnouncementBlockWhereInput
    isNot?: AnnouncementBlockWhereInput
  }

  export type AnnouncementBlockImageCountOrderByAggregateInput = {
    id?: SortOrder
    announcement_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type AnnouncementBlockImageAvgOrderByAggregateInput = {
    id?: SortOrder
    announcement_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type AnnouncementBlockImageMaxOrderByAggregateInput = {
    id?: SortOrder
    announcement_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type AnnouncementBlockImageMinOrderByAggregateInput = {
    id?: SortOrder
    announcement_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type AnnouncementBlockImageSumOrderByAggregateInput = {
    id?: SortOrder
    announcement_block_id?: SortOrder
    image_id?: SortOrder
    order?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MassSchedulesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mass_date?: SortOrder
    mass_time?: SortOrder
    liturgical_color?: SortOrder
    first_reading?: SortOrder
    second_reading?: SortOrder
    celebrant?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type MassSchedulesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MassSchedulesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mass_date?: SortOrder
    mass_time?: SortOrder
    liturgical_color?: SortOrder
    first_reading?: SortOrder
    second_reading?: SortOrder
    celebrant?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type MassSchedulesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mass_date?: SortOrder
    mass_time?: SortOrder
    liturgical_color?: SortOrder
    first_reading?: SortOrder
    second_reading?: SortOrder
    celebrant?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type MassSchedulesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    member_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    member_count?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    member_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    member_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    member_count?: SortOrder
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

  export type AnnouncementBlockImageCreateNestedManyWithoutImageInput = {
    create?: XOR<AnnouncementBlockImageCreateWithoutImageInput, AnnouncementBlockImageUncheckedCreateWithoutImageInput> | AnnouncementBlockImageCreateWithoutImageInput[] | AnnouncementBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: AnnouncementBlockImageCreateOrConnectWithoutImageInput | AnnouncementBlockImageCreateOrConnectWithoutImageInput[]
    createMany?: AnnouncementBlockImageCreateManyImageInputEnvelope
    connect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
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

  export type AnnouncementBlockImageUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<AnnouncementBlockImageCreateWithoutImageInput, AnnouncementBlockImageUncheckedCreateWithoutImageInput> | AnnouncementBlockImageCreateWithoutImageInput[] | AnnouncementBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: AnnouncementBlockImageCreateOrConnectWithoutImageInput | AnnouncementBlockImageCreateOrConnectWithoutImageInput[]
    createMany?: AnnouncementBlockImageCreateManyImageInputEnvelope
    connect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
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

  export type AnnouncementBlockImageUpdateManyWithoutImageNestedInput = {
    create?: XOR<AnnouncementBlockImageCreateWithoutImageInput, AnnouncementBlockImageUncheckedCreateWithoutImageInput> | AnnouncementBlockImageCreateWithoutImageInput[] | AnnouncementBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: AnnouncementBlockImageCreateOrConnectWithoutImageInput | AnnouncementBlockImageCreateOrConnectWithoutImageInput[]
    upsert?: AnnouncementBlockImageUpsertWithWhereUniqueWithoutImageInput | AnnouncementBlockImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: AnnouncementBlockImageCreateManyImageInputEnvelope
    set?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    disconnect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    delete?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    connect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    update?: AnnouncementBlockImageUpdateWithWhereUniqueWithoutImageInput | AnnouncementBlockImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: AnnouncementBlockImageUpdateManyWithWhereWithoutImageInput | AnnouncementBlockImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: AnnouncementBlockImageScalarWhereInput | AnnouncementBlockImageScalarWhereInput[]
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

  export type AnnouncementBlockImageUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<AnnouncementBlockImageCreateWithoutImageInput, AnnouncementBlockImageUncheckedCreateWithoutImageInput> | AnnouncementBlockImageCreateWithoutImageInput[] | AnnouncementBlockImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: AnnouncementBlockImageCreateOrConnectWithoutImageInput | AnnouncementBlockImageCreateOrConnectWithoutImageInput[]
    upsert?: AnnouncementBlockImageUpsertWithWhereUniqueWithoutImageInput | AnnouncementBlockImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: AnnouncementBlockImageCreateManyImageInputEnvelope
    set?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    disconnect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    delete?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    connect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    update?: AnnouncementBlockImageUpdateWithWhereUniqueWithoutImageInput | AnnouncementBlockImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: AnnouncementBlockImageUpdateManyWithWhereWithoutImageInput | AnnouncementBlockImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: AnnouncementBlockImageScalarWhereInput | AnnouncementBlockImageScalarWhereInput[]
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

  export type AnnouncementBlockCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<AnnouncementBlockCreateWithoutAnnouncementInput, AnnouncementBlockUncheckedCreateWithoutAnnouncementInput> | AnnouncementBlockCreateWithoutAnnouncementInput[] | AnnouncementBlockUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementBlockCreateOrConnectWithoutAnnouncementInput | AnnouncementBlockCreateOrConnectWithoutAnnouncementInput[]
    createMany?: AnnouncementBlockCreateManyAnnouncementInputEnvelope
    connect?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
  }

  export type AnnouncementBlockUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<AnnouncementBlockCreateWithoutAnnouncementInput, AnnouncementBlockUncheckedCreateWithoutAnnouncementInput> | AnnouncementBlockCreateWithoutAnnouncementInput[] | AnnouncementBlockUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementBlockCreateOrConnectWithoutAnnouncementInput | AnnouncementBlockCreateOrConnectWithoutAnnouncementInput[]
    createMany?: AnnouncementBlockCreateManyAnnouncementInputEnvelope
    connect?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
  }

  export type AnnouncementBlockUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<AnnouncementBlockCreateWithoutAnnouncementInput, AnnouncementBlockUncheckedCreateWithoutAnnouncementInput> | AnnouncementBlockCreateWithoutAnnouncementInput[] | AnnouncementBlockUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementBlockCreateOrConnectWithoutAnnouncementInput | AnnouncementBlockCreateOrConnectWithoutAnnouncementInput[]
    upsert?: AnnouncementBlockUpsertWithWhereUniqueWithoutAnnouncementInput | AnnouncementBlockUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: AnnouncementBlockCreateManyAnnouncementInputEnvelope
    set?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
    disconnect?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
    delete?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
    connect?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
    update?: AnnouncementBlockUpdateWithWhereUniqueWithoutAnnouncementInput | AnnouncementBlockUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: AnnouncementBlockUpdateManyWithWhereWithoutAnnouncementInput | AnnouncementBlockUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: AnnouncementBlockScalarWhereInput | AnnouncementBlockScalarWhereInput[]
  }

  export type AnnouncementBlockUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<AnnouncementBlockCreateWithoutAnnouncementInput, AnnouncementBlockUncheckedCreateWithoutAnnouncementInput> | AnnouncementBlockCreateWithoutAnnouncementInput[] | AnnouncementBlockUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementBlockCreateOrConnectWithoutAnnouncementInput | AnnouncementBlockCreateOrConnectWithoutAnnouncementInput[]
    upsert?: AnnouncementBlockUpsertWithWhereUniqueWithoutAnnouncementInput | AnnouncementBlockUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: AnnouncementBlockCreateManyAnnouncementInputEnvelope
    set?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
    disconnect?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
    delete?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
    connect?: AnnouncementBlockWhereUniqueInput | AnnouncementBlockWhereUniqueInput[]
    update?: AnnouncementBlockUpdateWithWhereUniqueWithoutAnnouncementInput | AnnouncementBlockUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: AnnouncementBlockUpdateManyWithWhereWithoutAnnouncementInput | AnnouncementBlockUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: AnnouncementBlockScalarWhereInput | AnnouncementBlockScalarWhereInput[]
  }

  export type AnnouncementCreateNestedOneWithoutAnnouncement_blocksInput = {
    create?: XOR<AnnouncementCreateWithoutAnnouncement_blocksInput, AnnouncementUncheckedCreateWithoutAnnouncement_blocksInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAnnouncement_blocksInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type AnnouncementBlockImageCreateNestedManyWithoutAnnouncement_blockInput = {
    create?: XOR<AnnouncementBlockImageCreateWithoutAnnouncement_blockInput, AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput> | AnnouncementBlockImageCreateWithoutAnnouncement_blockInput[] | AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput[]
    connectOrCreate?: AnnouncementBlockImageCreateOrConnectWithoutAnnouncement_blockInput | AnnouncementBlockImageCreateOrConnectWithoutAnnouncement_blockInput[]
    createMany?: AnnouncementBlockImageCreateManyAnnouncement_blockInputEnvelope
    connect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
  }

  export type AnnouncementBlockImageUncheckedCreateNestedManyWithoutAnnouncement_blockInput = {
    create?: XOR<AnnouncementBlockImageCreateWithoutAnnouncement_blockInput, AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput> | AnnouncementBlockImageCreateWithoutAnnouncement_blockInput[] | AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput[]
    connectOrCreate?: AnnouncementBlockImageCreateOrConnectWithoutAnnouncement_blockInput | AnnouncementBlockImageCreateOrConnectWithoutAnnouncement_blockInput[]
    createMany?: AnnouncementBlockImageCreateManyAnnouncement_blockInputEnvelope
    connect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
  }

  export type AnnouncementUpdateOneRequiredWithoutAnnouncement_blocksNestedInput = {
    create?: XOR<AnnouncementCreateWithoutAnnouncement_blocksInput, AnnouncementUncheckedCreateWithoutAnnouncement_blocksInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAnnouncement_blocksInput
    upsert?: AnnouncementUpsertWithoutAnnouncement_blocksInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutAnnouncement_blocksInput, AnnouncementUpdateWithoutAnnouncement_blocksInput>, AnnouncementUncheckedUpdateWithoutAnnouncement_blocksInput>
  }

  export type AnnouncementBlockImageUpdateManyWithoutAnnouncement_blockNestedInput = {
    create?: XOR<AnnouncementBlockImageCreateWithoutAnnouncement_blockInput, AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput> | AnnouncementBlockImageCreateWithoutAnnouncement_blockInput[] | AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput[]
    connectOrCreate?: AnnouncementBlockImageCreateOrConnectWithoutAnnouncement_blockInput | AnnouncementBlockImageCreateOrConnectWithoutAnnouncement_blockInput[]
    upsert?: AnnouncementBlockImageUpsertWithWhereUniqueWithoutAnnouncement_blockInput | AnnouncementBlockImageUpsertWithWhereUniqueWithoutAnnouncement_blockInput[]
    createMany?: AnnouncementBlockImageCreateManyAnnouncement_blockInputEnvelope
    set?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    disconnect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    delete?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    connect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    update?: AnnouncementBlockImageUpdateWithWhereUniqueWithoutAnnouncement_blockInput | AnnouncementBlockImageUpdateWithWhereUniqueWithoutAnnouncement_blockInput[]
    updateMany?: AnnouncementBlockImageUpdateManyWithWhereWithoutAnnouncement_blockInput | AnnouncementBlockImageUpdateManyWithWhereWithoutAnnouncement_blockInput[]
    deleteMany?: AnnouncementBlockImageScalarWhereInput | AnnouncementBlockImageScalarWhereInput[]
  }

  export type AnnouncementBlockImageUncheckedUpdateManyWithoutAnnouncement_blockNestedInput = {
    create?: XOR<AnnouncementBlockImageCreateWithoutAnnouncement_blockInput, AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput> | AnnouncementBlockImageCreateWithoutAnnouncement_blockInput[] | AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput[]
    connectOrCreate?: AnnouncementBlockImageCreateOrConnectWithoutAnnouncement_blockInput | AnnouncementBlockImageCreateOrConnectWithoutAnnouncement_blockInput[]
    upsert?: AnnouncementBlockImageUpsertWithWhereUniqueWithoutAnnouncement_blockInput | AnnouncementBlockImageUpsertWithWhereUniqueWithoutAnnouncement_blockInput[]
    createMany?: AnnouncementBlockImageCreateManyAnnouncement_blockInputEnvelope
    set?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    disconnect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    delete?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    connect?: AnnouncementBlockImageWhereUniqueInput | AnnouncementBlockImageWhereUniqueInput[]
    update?: AnnouncementBlockImageUpdateWithWhereUniqueWithoutAnnouncement_blockInput | AnnouncementBlockImageUpdateWithWhereUniqueWithoutAnnouncement_blockInput[]
    updateMany?: AnnouncementBlockImageUpdateManyWithWhereWithoutAnnouncement_blockInput | AnnouncementBlockImageUpdateManyWithWhereWithoutAnnouncement_blockInput[]
    deleteMany?: AnnouncementBlockImageScalarWhereInput | AnnouncementBlockImageScalarWhereInput[]
  }

  export type AnnouncementBlockCreateNestedOneWithoutAnnouncement_block_imagesInput = {
    create?: XOR<AnnouncementBlockCreateWithoutAnnouncement_block_imagesInput, AnnouncementBlockUncheckedCreateWithoutAnnouncement_block_imagesInput>
    connectOrCreate?: AnnouncementBlockCreateOrConnectWithoutAnnouncement_block_imagesInput
    connect?: AnnouncementBlockWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutAnnouncementBlockImagesInput = {
    create?: XOR<ImageCreateWithoutAnnouncementBlockImagesInput, ImageUncheckedCreateWithoutAnnouncementBlockImagesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutAnnouncementBlockImagesInput
    connect?: ImageWhereUniqueInput
  }

  export type AnnouncementBlockUpdateOneRequiredWithoutAnnouncement_block_imagesNestedInput = {
    create?: XOR<AnnouncementBlockCreateWithoutAnnouncement_block_imagesInput, AnnouncementBlockUncheckedCreateWithoutAnnouncement_block_imagesInput>
    connectOrCreate?: AnnouncementBlockCreateOrConnectWithoutAnnouncement_block_imagesInput
    upsert?: AnnouncementBlockUpsertWithoutAnnouncement_block_imagesInput
    connect?: AnnouncementBlockWhereUniqueInput
    update?: XOR<XOR<AnnouncementBlockUpdateToOneWithWhereWithoutAnnouncement_block_imagesInput, AnnouncementBlockUpdateWithoutAnnouncement_block_imagesInput>, AnnouncementBlockUncheckedUpdateWithoutAnnouncement_block_imagesInput>
  }

  export type ImageUpdateOneRequiredWithoutAnnouncementBlockImagesNestedInput = {
    create?: XOR<ImageCreateWithoutAnnouncementBlockImagesInput, ImageUncheckedCreateWithoutAnnouncementBlockImagesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutAnnouncementBlockImagesInput
    upsert?: ImageUpsertWithoutAnnouncementBlockImagesInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutAnnouncementBlockImagesInput, ImageUpdateWithoutAnnouncementBlockImagesInput>, ImageUncheckedUpdateWithoutAnnouncementBlockImagesInput>
  }

  export type RoleCreateNestedOneWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    connect?: RoleWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    upsert?: RoleUpsertWithoutUserInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserInput, RoleUpdateWithoutUserInput>, RoleUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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
    AnnouncementBlockImages?: AnnouncementBlockImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutNewsBlockImagesInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    SermonsBlockImages?: SermonBlockImageUncheckedCreateNestedManyWithoutImageInput
    AnnouncementBlockImages?: AnnouncementBlockImageUncheckedCreateNestedManyWithoutImageInput
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
    AnnouncementBlockImages?: AnnouncementBlockImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutNewsBlockImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SermonsBlockImages?: SermonBlockImageUncheckedUpdateManyWithoutImageNestedInput
    AnnouncementBlockImages?: AnnouncementBlockImageUncheckedUpdateManyWithoutImageNestedInput
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

  export type AnnouncementBlockImageCreateWithoutImageInput = {
    id?: bigint | number
    order: bigint | number
    announcement_block: AnnouncementBlockCreateNestedOneWithoutAnnouncement_block_imagesInput
  }

  export type AnnouncementBlockImageUncheckedCreateWithoutImageInput = {
    id?: bigint | number
    announcement_block_id: bigint | number
    order: bigint | number
  }

  export type AnnouncementBlockImageCreateOrConnectWithoutImageInput = {
    where: AnnouncementBlockImageWhereUniqueInput
    create: XOR<AnnouncementBlockImageCreateWithoutImageInput, AnnouncementBlockImageUncheckedCreateWithoutImageInput>
  }

  export type AnnouncementBlockImageCreateManyImageInputEnvelope = {
    data: AnnouncementBlockImageCreateManyImageInput | AnnouncementBlockImageCreateManyImageInput[]
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

  export type AnnouncementBlockImageUpsertWithWhereUniqueWithoutImageInput = {
    where: AnnouncementBlockImageWhereUniqueInput
    update: XOR<AnnouncementBlockImageUpdateWithoutImageInput, AnnouncementBlockImageUncheckedUpdateWithoutImageInput>
    create: XOR<AnnouncementBlockImageCreateWithoutImageInput, AnnouncementBlockImageUncheckedCreateWithoutImageInput>
  }

  export type AnnouncementBlockImageUpdateWithWhereUniqueWithoutImageInput = {
    where: AnnouncementBlockImageWhereUniqueInput
    data: XOR<AnnouncementBlockImageUpdateWithoutImageInput, AnnouncementBlockImageUncheckedUpdateWithoutImageInput>
  }

  export type AnnouncementBlockImageUpdateManyWithWhereWithoutImageInput = {
    where: AnnouncementBlockImageScalarWhereInput
    data: XOR<AnnouncementBlockImageUpdateManyMutationInput, AnnouncementBlockImageUncheckedUpdateManyWithoutImageInput>
  }

  export type AnnouncementBlockImageScalarWhereInput = {
    AND?: AnnouncementBlockImageScalarWhereInput | AnnouncementBlockImageScalarWhereInput[]
    OR?: AnnouncementBlockImageScalarWhereInput[]
    NOT?: AnnouncementBlockImageScalarWhereInput | AnnouncementBlockImageScalarWhereInput[]
    id?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    announcement_block_id?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    image_id?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
    order?: BigIntFilter<"AnnouncementBlockImage"> | bigint | number
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
    AnnouncementBlockImages?: AnnouncementBlockImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutSermonsBlockImagesInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    NewsBlockImages?: NewsBlockImageUncheckedCreateNestedManyWithoutImageInput
    AnnouncementBlockImages?: AnnouncementBlockImageUncheckedCreateNestedManyWithoutImageInput
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
    AnnouncementBlockImages?: AnnouncementBlockImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutSermonsBlockImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NewsBlockImages?: NewsBlockImageUncheckedUpdateManyWithoutImageNestedInput
    AnnouncementBlockImages?: AnnouncementBlockImageUncheckedUpdateManyWithoutImageNestedInput
  }

  export type AnnouncementBlockCreateWithoutAnnouncementInput = {
    id?: bigint | number
    content?: string | null
    order: bigint | number
    announcement_block_images?: AnnouncementBlockImageCreateNestedManyWithoutAnnouncement_blockInput
  }

  export type AnnouncementBlockUncheckedCreateWithoutAnnouncementInput = {
    id?: bigint | number
    content?: string | null
    order: bigint | number
    announcement_block_images?: AnnouncementBlockImageUncheckedCreateNestedManyWithoutAnnouncement_blockInput
  }

  export type AnnouncementBlockCreateOrConnectWithoutAnnouncementInput = {
    where: AnnouncementBlockWhereUniqueInput
    create: XOR<AnnouncementBlockCreateWithoutAnnouncementInput, AnnouncementBlockUncheckedCreateWithoutAnnouncementInput>
  }

  export type AnnouncementBlockCreateManyAnnouncementInputEnvelope = {
    data: AnnouncementBlockCreateManyAnnouncementInput | AnnouncementBlockCreateManyAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementBlockUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: AnnouncementBlockWhereUniqueInput
    update: XOR<AnnouncementBlockUpdateWithoutAnnouncementInput, AnnouncementBlockUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<AnnouncementBlockCreateWithoutAnnouncementInput, AnnouncementBlockUncheckedCreateWithoutAnnouncementInput>
  }

  export type AnnouncementBlockUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: AnnouncementBlockWhereUniqueInput
    data: XOR<AnnouncementBlockUpdateWithoutAnnouncementInput, AnnouncementBlockUncheckedUpdateWithoutAnnouncementInput>
  }

  export type AnnouncementBlockUpdateManyWithWhereWithoutAnnouncementInput = {
    where: AnnouncementBlockScalarWhereInput
    data: XOR<AnnouncementBlockUpdateManyMutationInput, AnnouncementBlockUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type AnnouncementBlockScalarWhereInput = {
    AND?: AnnouncementBlockScalarWhereInput | AnnouncementBlockScalarWhereInput[]
    OR?: AnnouncementBlockScalarWhereInput[]
    NOT?: AnnouncementBlockScalarWhereInput | AnnouncementBlockScalarWhereInput[]
    id?: BigIntFilter<"AnnouncementBlock"> | bigint | number
    announcement_id?: BigIntFilter<"AnnouncementBlock"> | bigint | number
    content?: StringNullableFilter<"AnnouncementBlock"> | string | null
    order?: BigIntFilter<"AnnouncementBlock"> | bigint | number
  }

  export type AnnouncementCreateWithoutAnnouncement_blocksInput = {
    id?: bigint | number
    title?: string | null
    status: boolean
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type AnnouncementUncheckedCreateWithoutAnnouncement_blocksInput = {
    id?: bigint | number
    title?: string | null
    status: boolean
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type AnnouncementCreateOrConnectWithoutAnnouncement_blocksInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutAnnouncement_blocksInput, AnnouncementUncheckedCreateWithoutAnnouncement_blocksInput>
  }

  export type AnnouncementBlockImageCreateWithoutAnnouncement_blockInput = {
    id?: bigint | number
    order: bigint | number
    image: ImageCreateNestedOneWithoutAnnouncementBlockImagesInput
  }

  export type AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput = {
    id?: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type AnnouncementBlockImageCreateOrConnectWithoutAnnouncement_blockInput = {
    where: AnnouncementBlockImageWhereUniqueInput
    create: XOR<AnnouncementBlockImageCreateWithoutAnnouncement_blockInput, AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput>
  }

  export type AnnouncementBlockImageCreateManyAnnouncement_blockInputEnvelope = {
    data: AnnouncementBlockImageCreateManyAnnouncement_blockInput | AnnouncementBlockImageCreateManyAnnouncement_blockInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementUpsertWithoutAnnouncement_blocksInput = {
    update: XOR<AnnouncementUpdateWithoutAnnouncement_blocksInput, AnnouncementUncheckedUpdateWithoutAnnouncement_blocksInput>
    create: XOR<AnnouncementCreateWithoutAnnouncement_blocksInput, AnnouncementUncheckedCreateWithoutAnnouncement_blocksInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutAnnouncement_blocksInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutAnnouncement_blocksInput, AnnouncementUncheckedUpdateWithoutAnnouncement_blocksInput>
  }

  export type AnnouncementUpdateWithoutAnnouncement_blocksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementUncheckedUpdateWithoutAnnouncement_blocksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementBlockImageUpsertWithWhereUniqueWithoutAnnouncement_blockInput = {
    where: AnnouncementBlockImageWhereUniqueInput
    update: XOR<AnnouncementBlockImageUpdateWithoutAnnouncement_blockInput, AnnouncementBlockImageUncheckedUpdateWithoutAnnouncement_blockInput>
    create: XOR<AnnouncementBlockImageCreateWithoutAnnouncement_blockInput, AnnouncementBlockImageUncheckedCreateWithoutAnnouncement_blockInput>
  }

  export type AnnouncementBlockImageUpdateWithWhereUniqueWithoutAnnouncement_blockInput = {
    where: AnnouncementBlockImageWhereUniqueInput
    data: XOR<AnnouncementBlockImageUpdateWithoutAnnouncement_blockInput, AnnouncementBlockImageUncheckedUpdateWithoutAnnouncement_blockInput>
  }

  export type AnnouncementBlockImageUpdateManyWithWhereWithoutAnnouncement_blockInput = {
    where: AnnouncementBlockImageScalarWhereInput
    data: XOR<AnnouncementBlockImageUpdateManyMutationInput, AnnouncementBlockImageUncheckedUpdateManyWithoutAnnouncement_blockInput>
  }

  export type AnnouncementBlockCreateWithoutAnnouncement_block_imagesInput = {
    id?: bigint | number
    content?: string | null
    order: bigint | number
    announcement: AnnouncementCreateNestedOneWithoutAnnouncement_blocksInput
  }

  export type AnnouncementBlockUncheckedCreateWithoutAnnouncement_block_imagesInput = {
    id?: bigint | number
    announcement_id: bigint | number
    content?: string | null
    order: bigint | number
  }

  export type AnnouncementBlockCreateOrConnectWithoutAnnouncement_block_imagesInput = {
    where: AnnouncementBlockWhereUniqueInput
    create: XOR<AnnouncementBlockCreateWithoutAnnouncement_block_imagesInput, AnnouncementBlockUncheckedCreateWithoutAnnouncement_block_imagesInput>
  }

  export type ImageCreateWithoutAnnouncementBlockImagesInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    NewsBlockImages?: NewsBlockImageCreateNestedManyWithoutImageInput
    SermonsBlockImages?: SermonBlockImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutAnnouncementBlockImagesInput = {
    id?: bigint | number
    url: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    NewsBlockImages?: NewsBlockImageUncheckedCreateNestedManyWithoutImageInput
    SermonsBlockImages?: SermonBlockImageUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutAnnouncementBlockImagesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutAnnouncementBlockImagesInput, ImageUncheckedCreateWithoutAnnouncementBlockImagesInput>
  }

  export type AnnouncementBlockUpsertWithoutAnnouncement_block_imagesInput = {
    update: XOR<AnnouncementBlockUpdateWithoutAnnouncement_block_imagesInput, AnnouncementBlockUncheckedUpdateWithoutAnnouncement_block_imagesInput>
    create: XOR<AnnouncementBlockCreateWithoutAnnouncement_block_imagesInput, AnnouncementBlockUncheckedCreateWithoutAnnouncement_block_imagesInput>
    where?: AnnouncementBlockWhereInput
  }

  export type AnnouncementBlockUpdateToOneWithWhereWithoutAnnouncement_block_imagesInput = {
    where?: AnnouncementBlockWhereInput
    data: XOR<AnnouncementBlockUpdateWithoutAnnouncement_block_imagesInput, AnnouncementBlockUncheckedUpdateWithoutAnnouncement_block_imagesInput>
  }

  export type AnnouncementBlockUpdateWithoutAnnouncement_block_imagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement?: AnnouncementUpdateOneRequiredWithoutAnnouncement_blocksNestedInput
  }

  export type AnnouncementBlockUncheckedUpdateWithoutAnnouncement_block_imagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ImageUpsertWithoutAnnouncementBlockImagesInput = {
    update: XOR<ImageUpdateWithoutAnnouncementBlockImagesInput, ImageUncheckedUpdateWithoutAnnouncementBlockImagesInput>
    create: XOR<ImageCreateWithoutAnnouncementBlockImagesInput, ImageUncheckedCreateWithoutAnnouncementBlockImagesInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutAnnouncementBlockImagesInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutAnnouncementBlockImagesInput, ImageUncheckedUpdateWithoutAnnouncementBlockImagesInput>
  }

  export type ImageUpdateWithoutAnnouncementBlockImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NewsBlockImages?: NewsBlockImageUpdateManyWithoutImageNestedInput
    SermonsBlockImages?: SermonBlockImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutAnnouncementBlockImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NewsBlockImages?: NewsBlockImageUncheckedUpdateManyWithoutImageNestedInput
    SermonsBlockImages?: SermonBlockImageUncheckedUpdateManyWithoutImageNestedInput
  }

  export type RoleCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type RoleUpsertWithoutUserInput = {
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutRoleInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role_id?: BigIntFilter<"User"> | bigint | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
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

  export type AnnouncementBlockImageCreateManyImageInput = {
    id?: bigint | number
    announcement_block_id: bigint | number
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

  export type AnnouncementBlockImageUpdateWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_block?: AnnouncementBlockUpdateOneRequiredWithoutAnnouncement_block_imagesNestedInput
  }

  export type AnnouncementBlockImageUncheckedUpdateWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AnnouncementBlockImageUncheckedUpdateManyWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_block_id?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type AnnouncementBlockCreateManyAnnouncementInput = {
    id?: bigint | number
    content?: string | null
    order: bigint | number
  }

  export type AnnouncementBlockUpdateWithoutAnnouncementInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_block_images?: AnnouncementBlockImageUpdateManyWithoutAnnouncement_blockNestedInput
  }

  export type AnnouncementBlockUncheckedUpdateWithoutAnnouncementInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    announcement_block_images?: AnnouncementBlockImageUncheckedUpdateManyWithoutAnnouncement_blockNestedInput
  }

  export type AnnouncementBlockUncheckedUpdateManyWithoutAnnouncementInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AnnouncementBlockImageCreateManyAnnouncement_blockInput = {
    id?: bigint | number
    image_id: bigint | number
    order: bigint | number
  }

  export type AnnouncementBlockImageUpdateWithoutAnnouncement_blockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
    image?: ImageUpdateOneRequiredWithoutAnnouncementBlockImagesNestedInput
  }

  export type AnnouncementBlockImageUncheckedUpdateWithoutAnnouncement_blockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AnnouncementBlockImageUncheckedUpdateManyWithoutAnnouncement_blockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCreateManyRoleInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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