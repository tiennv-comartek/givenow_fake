import type { GraphQLClient } from 'graphql-request';
import type { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Timestamp: any;
  Upload: any;
};

export type AccessTokenEntity = {
  __typename?: 'AccessTokenEntity';
  /** Jwt access token */
  accessToken: Scalars['String'];
};

export enum AccountType {
  OauthFacebook = 'OAUTH_FACEBOOK',
  OauthGoogle = 'OAUTH_GOOGLE',
  SystemAccount = 'SYSTEM_ACCOUNT'
}

export type AllCardResponseType = {
  __typename?: 'AllCardResponseType';
  data?: Maybe<Array<Card>>;
  pageInfo?: Maybe<PageInfo>;
  total: Scalars['Int'];
};

export type AllUserResponseType = {
  __typename?: 'AllUserResponseType';
  data?: Maybe<Array<User>>;
  pageInfo?: Maybe<PageInfo>;
  total: Scalars['Int'];
};

export type AmbassadorProject = {
  __typename?: 'AmbassadorProject';
  _id: Scalars['ID'];
  ambassadorById: User;
  createdAt: Scalars['Timestamp'];
  currentDonate: Scalars['Float'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  projectId: Scalars['String'];
  projectOfAmbassador: Project;
  status: AmbassadorStatus;
  targetDonate: Scalars['Float'];
  updatedAt: Scalars['Timestamp'];
  userId: Scalars['String'];
};

export enum AmbassadorStatus {
  AdminRefused = 'ADMIN_REFUSED',
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Refused = 'REFUSED',
  WaitAdminApproved = 'WAIT_ADMIN_APPROVED'
}

export type Card = {
  __typename?: 'Card';
  _id: Scalars['ID'];
  cardTemplate?: Maybe<CardTemplate>;
  code: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  dateToSend: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  donateInfo?: Maybe<DonateInfo>;
  expireDate?: Maybe<Scalars['Timestamp']>;
  isReciprocated: Scalars['Boolean'];
  loggingData?: Maybe<LoggingData>;
  message?: Maybe<Scalars['String']>;
  order?: Maybe<OrderEcard>;
  projectId?: Maybe<Scalars['String']>;
  receiverEmail: Scalars['String'];
  reciprocatedAt: Scalars['Timestamp'];
  reciprocatedById?: Maybe<Scalars['String']>;
  status: CardStatus;
  thumbnail?: Maybe<Image>;
  updatedAt: Scalars['Timestamp'];
  usedAt?: Maybe<Scalars['Timestamp']>;
  value: Scalars['Float'];
};

export type CardFilterDto = {
  codeOrReceiverEmail?: InputMaybe<Scalars['String']>;
  endDateToSend?: InputMaybe<Scalars['Float']>;
  limit: Scalars['Int'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  startDateToSend?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<CardStatus>;
};

export enum CardStatus {
  Expired = 'EXPIRED',
  Sent = 'SENT',
  Used = 'USED',
  Verified = 'VERIFIED',
  WaitToSend = 'WAIT_TO_SEND'
}

export type CardTemplate = {
  __typename?: 'CardTemplate';
  _id: Scalars['ID'];
  /** card-template's images */
  category: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  image?: Maybe<Image>;
  /** card-template's name */
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type CardTemplateRes = {
  __typename?: 'CardTemplateRes';
  data: Array<CardTemplate>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID'];
  code: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type ChangePasswordDto = {
  confirmPassword: Scalars['String'];
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type CreateAmbassadorProjectInput = {
  ambassadorId: Scalars['String'];
  projectId: Scalars['String'];
  targetDonate: Scalars['Float'];
};

export type CreateCardTemplateDto = {
  /** card-template's category */
  category: Scalars['String'];
  /** card-template's image id */
  imageId: Scalars['String'];
  /** card-template's name */
  name: Scalars['String'];
};

export type CreateCategoryInput = {
  name: Scalars['String'];
};

export type CreateEnterpriseDto = {
  /** Enterprise's avatar */
  avatar: Scalars['String'];
  /** Enterprise's cover image */
  coverImage: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<EnterpriseStatus>;
  userName: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type CreateFundDto = {
  /** address */
  address: Scalars['String'];
  /** fund description */
  description: Scalars['String'];
  /** fund email */
  email: Scalars['String'];
  /** hotline */
  hotline: Scalars['String'];
  /** fund name */
  name: Scalars['String'];
  /** fund url website */
  website?: InputMaybe<Scalars['String']>;
};

export type CreateFundUserDto = {
  /** id of fund will be add fund user */
  id: Scalars['ID'];
  /** role for user in fund */
  role: FundRolesEnum;
  /** user id */
  userId: Scalars['ID'];
};

export type CreateOrderEcardInput = {
  paymentType: PaymentType;
  receiversInput: Array<ReceiverInput>;
  senderInput: SenderInput;
  templateId: Scalars['String'];
  tips?: InputMaybe<Scalars['Float']>;
  totalAmount: Scalars['Float'];
};

export type CreatePostInput = {
  authorId: Scalars['String'];
  categoryName: Scalars['String'];
  htmlText: Scalars['String'];
  imgSrc: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateProjectCategoryDto = {
  /** category name */
  name: Scalars['String'];
};

export type CreateProjectCategoryInput = {
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['ID']>;
};

export type CreateProjectDto = {
  /** User can choose whether they accept the ambassador */
  acceptAmbassador?: InputMaybe<Scalars['Boolean']>;
  /** The user can choose whether they accept enterprise reciprocal enterprise */
  acceptReciprocal?: InputMaybe<Scalars['Boolean']>;
  /** project's avatar */
  avatarImageId?: InputMaybe<Scalars['ID']>;
  /** Category of project */
  categoryId: Scalars['String'];
  /** End date of project submit format millisecond */
  endDate: Scalars['Float'];
  /** Full description of project */
  fullDescription?: InputMaybe<Scalars['String']>;
  /** Fund of project */
  fundId: Scalars['ID'];
  /** project's album */
  imageIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Name of project */
  name: Scalars['String'];
  revisionOf?: InputMaybe<Scalars['ID']>;
  /** Short description of project */
  shortDescription: Scalars['String'];
  /** Start date of project submit format millisecond */
  startDate: Scalars['Float'];
  /** Suggest amount that the fund want */
  suggestAmount?: InputMaybe<Scalars['Float']>;
  /** Target amount that the fund want */
  targetAmount?: InputMaybe<Scalars['Float']>;
};

export type CreateProjectInput = {
  /** User can choose whether they accept the ambassador */
  acceptAmbassador: Scalars['Boolean'];
  /** The user can choose whether they accept company reciprocal company */
  acceptReciprocal: Scalars['Boolean'];
  /** Category of project */
  categoryId: Scalars['String'];
  /** End date of project */
  endDate: Scalars['String'];
  /** Full description of project */
  fullDescription?: InputMaybe<Scalars['String']>;
  /** Fund of project */
  fundId: Scalars['String'];
  /** Name of project */
  name: Scalars['String'];
  /** reciprocal */
  reciprocal?: InputMaybe<ReciprocalInput>;
  revisionOf?: InputMaybe<Scalars['String']>;
  /** Short description of project */
  shortDescription: Scalars['String'];
  /** Start date of project */
  startDate: Scalars['String'];
  /** Suggest amount that the fund want */
  suggestAmount: Scalars['Float'];
  /** Target amount that the fund want */
  targetAmount: Scalars['Float'];
};

export type CreateReciprocalDto = {
  /** ID of reciprocal enterprise */
  enterpriseId: Scalars['ID'];
  /** Method of reciprocal */
  method: ReciprocalV1Method;
  /** ID of project */
  projectId: Scalars['ID'];
  /** ratio reciprocal */
  ratio: Scalars['Float'];
};

export type CreateUserInput = {
  addressDetail: Scalars['String'];
  backIdentifyCardImageId: Scalars['String'];
  city: Scalars['String'];
  dateOfBirth?: InputMaybe<Scalars['String']>;
  district: Scalars['String'];
  email: Scalars['String'];
  facebookUrl?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  frontIdentifyCardImageId: Scalars['String'];
  gender: Gender;
  identifyNumber: Scalars['String'];
  lastName: Scalars['String'];
  mailReceive: Scalars['Boolean'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  subDistrict: Scalars['String'];
};

export type Dashboard = {
  __typename?: 'Dashboard';
  ambassador: Scalars['Float'];
  enterprise: Scalars['Float'];
  fund: Scalars['Float'];
  order: Scalars['Float'];
  project: Scalars['Float'];
  user: Scalars['Float'];
};

export type DefaultSetting = {
  __typename?: 'DefaultSetting';
  fromAddress?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  pass?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Float']>;
  senderName?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type Dimension = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type DonateInfo = {
  __typename?: 'DonateInfo';
  address?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  isAnonymous?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type DonateInfoInput = {
  address?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  isAnonymous: Scalars['Boolean'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type ECardSetting = {
  __typename?: 'ECardSetting';
  /** E card's expiration in ?  it's day */
  expirationIn: Scalars['Float'];
  /** fee when buy ecard */
  fee: Scalars['Float'];
  /** limit sending time since user buy ecard time: is day */
  limitSendingTime: Scalars['Float'];
};

export type ECardSettingDto = {
  /** expiration time of ecard: ex 5, 6 day */
  expirationIn: Scalars['Float'];
  /** fee for give now project */
  fee: Scalars['Float'];
  /** limitSendingTime time of ecard: ex 5, 6 day */
  limitSendingTime: Scalars['Float'];
};

export type Enterprise = {
  __typename?: 'Enterprise';
  /** ID of enterprise */
  _id: Scalars['String'];
  /** is userId from users sync from mysql db */
  accountId?: Maybe<Scalars['Float']>;
  avatar: Image;
  coverImage?: Maybe<Image>;
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  /** user's display name */
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  /** enterpriseId is userid with role enterprise in mysql givenow db */
  enterpriseId?: Maybe<Scalars['Float']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** role enterprise */
  role: Role;
  status: EnterpriseStatus;
  updatedAt: Scalars['Timestamp'];
  userName: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export enum EnterpriseStatus {
  NotVerified = 'NOT_VERIFIED',
  Verified = 'VERIFIED'
}

export enum ExportFileType {
  Csv = 'CSV',
  Xlsx = 'XLSX'
}

export type ExportOrderDto = {
  end_date?: InputMaybe<Scalars['Timestamp']>;
  file_type?: InputMaybe<ExportFileType>;
  start_date: Scalars['Timestamp'];
};

export type ExportProjectAmbassadorDto = {
  /** ambassador status in project */
  status?: InputMaybe<AmbassadorStatus>;
  /** type file you want to export: csv or xlsx */
  typeFile?: InputMaybe<ExportFileType>;
};

export type FilterFundDto = {
  /** fund id */
  _id?: InputMaybe<Scalars['ID']>;
  /** fund email */
  email?: InputMaybe<Scalars['String']>;
};

export type FilterFundPagingDto = {
  /** address of fund */
  address?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  pageNumber?: InputMaybe<Scalars['Int']>;
};

export type FilterOrderV1 = {
  /** order status */
  status?: InputMaybe<OrderV1StatusEnum>;
};

export type FilterProjectCategoryDto = {
  limit: Scalars['Int'];
  /** name of category */
  name?: InputMaybe<Scalars['String']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
};

export type FindOptionCardTemplateDto = {
  /** key search for ecard template */
  keySearch?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  pageNumber?: InputMaybe<Scalars['Int']>;
};

export type FindPostsInput = {
  categoryName?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
  searchText?: InputMaybe<Scalars['String']>;
};

export type FindProjectDto = {
  limit: Scalars['Int'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  /** project status */
  status?: InputMaybe<ProjectV1Status>;
};

export type Fund = {
  __typename?: 'Fund';
  _id: Scalars['ID'];
  /** address */
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  /** fund description */
  description?: Maybe<Scalars['String']>;
  /** fund email */
  email: Scalars['String'];
  /** fundId is ID of fund in givenow */
  fundId?: Maybe<Scalars['Float']>;
  /** hotline */
  hotline?: Maybe<Scalars['String']>;
  /** fund name */
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Timestamp'];
  /** users of fund */
  users?: Maybe<Array<FundUser>>;
  /** fund url website */
  website?: Maybe<Scalars['String']>;
};

export type FundPagingRes = {
  __typename?: 'FundPagingRes';
  /** funds */
  data: Array<Fund>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export enum FundRolesEnum {
  Admin = 'ADMIN',
  Audit = 'AUDIT',
  Content = 'CONTENT'
}

export type FundUser = {
  __typename?: 'FundUser';
  /** user role in fund */
  role: FundRolesEnum;
  /** userId is userId */
  userId: Scalars['ID'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Others = 'OTHERS',
  Type = 'type'
}

export type IdsDto = {
  ids: Array<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  _id: Scalars['ID'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  fileOriginName: Scalars['String'];
  fileOriginUrl: Scalars['String'];
  fileResizedName: Scalars['String'];
  fileResizedUrl: Scalars['String'];
  imageId: Scalars['ID'];
  updatedAt: Scalars['Timestamp'];
  uploadedBy: User;
};

export type ListAllImageInput = {
  pagination?: InputMaybe<PaginationInput>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type ListAmbassadorInput = {
  limit: Scalars['Int'];
  pageNumber: Scalars['Int'];
};

export type ListAmbassadorProjectInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<AmbassadorStatus>;
};

export type ListImage = {
  __typename?: 'ListImage';
  images: Array<Image>;
  total: Scalars['Int'];
};

export type ListImageByImageIdsInput = {
  imageIds: Array<Scalars['ID']>;
  pagination?: InputMaybe<PaginationInput>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type ListImageByUploadedByInput = {
  pagination?: InputMaybe<PaginationInput>;
  sortOrder?: InputMaybe<SortOrder>;
  uploadedBy: Scalars['ID'];
};

export type ListOrder = {
  __typename?: 'ListOrder';
  orders: Array<Order>;
  total: Scalars['Int'];
};

export type ListOrdersInput = {
  limitOrders?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
  projectId: Scalars['String'];
  searchText?: InputMaybe<Scalars['String']>;
  status: OrderStatus;
};

export type ListPost = {
  __typename?: 'ListPost';
  posts: Array<Post>;
  total: Scalars['Int'];
};

export type LogOutEntity = {
  __typename?: 'LogOutEntity';
  message: Scalars['String'];
};

export type LogOutInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type LoggingData = {
  __typename?: 'LoggingData';
  ipAddress?: Maybe<Scalars['String']>;
  usedAt?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponseEntity = {
  __typename?: 'LoginResponseEntity';
  /** Jwt access token */
  accessToken: Scalars['String'];
  /** Expired time of access token */
  accessTokenExpiresIn: Scalars['Float'];
  currentUserData?: Maybe<User>;
  managerFund?: Maybe<UserRoleInFund>;
  /** Jwt refresh token */
  refreshToken: Scalars['String'];
  /** Expired time of refresh token */
  refreshTokenExpiresIn: Scalars['Float'];
};

export type MongooseUpdateResult = {
  __typename?: 'MongooseUpdateResult';
  acknowledged: Scalars['Boolean'];
  matchedCount: Scalars['Float'];
  modifiedCount: Scalars['Float'];
  upsertedCount: Scalars['Float'];
  upsertedId?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  DeleteOrderByAdmin: Scalars['Boolean'];
  UpdateOrderByAdmin: Order;
  approveAmbassadorByAdmin: AmbassadorProject;
  approvePauseProject: Project;
  approveRevision: Project;
  authenticateFbToken: LoginResponseEntity;
  changePassword: Scalars['String'];
  createAmbassadorProject: AmbassadorProject;
  createCardTemplate: CardTemplate;
  createEnterprise: Enterprise;
  /** admin create fund info */
  createFund: Fund;
  /** admin of fund admin create fund user */
  createFundUser: Fund;
  createPaymentUrl: Payment;
  createPost: Post;
  createPostCategory: Category;
  /** create revision when create or update project, update project have more revisionOf field */
  createProject: ProjectRevision;
  createProjectCategory: ProjectV1Category;
  createProjectCategory_old: ProjectCategory;
  createProject_old: Project;
  createReciprocal: ReciprocalV1;
  createResetPasswordRequest: Scalars['String'];
  createRevision: Revision;
  createUser: User;
  deleteAvatarImage: User;
  deleteCardTemplate: CardTemplate;
  deleteCoverImage: User;
  deleteEnterprise: Scalars['String'];
  deleteImages: MongooseUpdateResult;
  deleteOrder: Scalars['String'];
  deletePost: Scalars['Boolean'];
  deletePostCategory: Scalars['Boolean'];
  deleteProject: Project;
  deleteProjectCategory_old: ProjectCategory;
  deleteRevision: Revision;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Scalars['String']>;
  destroyImages: Array<Image>;
  getAccessToken: AccessTokenEntity;
  logOut: LogOutEntity;
  pauseProject: Project;
  /** admin approve project, change status from pending to publish */
  publishProject: ProjectV1;
  register: RegisterEntity;
  registerAmbassador: AmbassadorProject;
  removeAmbassador: User;
  removeAmbassadorProject: AmbassadorProject;
  signIn: LoginResponseEntity;
  /** fund or admin submit project and send notification to admin, pending, waiting admin approval project */
  submitProject: ProjectRevision;
  submitRevision: Revision;
  updateAmbassadorProject: AmbassadorProject;
  updateAvatarImage: User;
  updateCardTemplate: CardTemplate;
  updateCoverImage: User;
  updateDefaultSetting: DefaultSetting;
  updateECardSetting: ECardSetting;
  updateEnterprise: Enterprise;
  /** admin can update fund info */
  updateFund: Fund;
  updateOrder: Scalars['String'];
  updateOrderEcardStatus: Scalars['Boolean'];
  updatePaymentSetting: PaymentSetting;
  updatePost: Post;
  updatePostCategory: Category;
  updateProjectCategory: ProjectV1Category;
  updateProjectCategory_old: ProjectCategory;
  updateProject_old: Project;
  updateReciprocalStatusCard: Scalars['Boolean'];
  updateRevision: Project;
  updateUser: User;
  updateUserByAdmin?: Maybe<User>;
  uploadImages: Array<Image>;
  useCards?: Maybe<Card>;
};


export type MutationDeleteOrderByAdminArgs = {
  OrderId: Scalars['String'];
};


export type MutationUpdateOrderByAdminArgs = {
  UpdateOrderInput: UpdateOrderInput;
};


export type MutationApproveAmbassadorByAdminArgs = {
  projectId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationApprovePauseProjectArgs = {
  projectId: Scalars['String'];
};


export type MutationApproveRevisionArgs = {
  revisionId: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  changePasswordDto: ChangePasswordDto;
};


export type MutationCreateAmbassadorProjectArgs = {
  createAmbassadorProjectInput: CreateAmbassadorProjectInput;
};


export type MutationCreateCardTemplateArgs = {
  cardTemplate: CreateCardTemplateDto;
};


export type MutationCreateEnterpriseArgs = {
  enterprise: CreateEnterpriseDto;
};


export type MutationCreateFundArgs = {
  fundInfo: CreateFundDto;
};


export type MutationCreateFundUserArgs = {
  createFundUser: CreateFundUserDto;
};


export type MutationCreatePaymentUrlArgs = {
  CreateOrderEcardInput: CreateOrderEcardInput;
};


export type MutationCreatePostArgs = {
  CreatePostInput: CreatePostInput;
};


export type MutationCreatePostCategoryArgs = {
  CreateCategoryPostInput: CreateCategoryInput;
};


export type MutationCreateProjectArgs = {
  infoProject: CreateProjectDto;
};


export type MutationCreateProjectCategoryArgs = {
  createProjectCategoryDto: CreateProjectCategoryDto;
};


export type MutationCreateProjectCategory_OldArgs = {
  createProjectCategoryInput: CreateProjectCategoryInput;
};


export type MutationCreateProject_OldArgs = {
  createProjectInput: CreateProjectInput;
};


export type MutationCreateReciprocalArgs = {
  createReciprocalDto: CreateReciprocalDto;
};


export type MutationCreateResetPasswordRequestArgs = {
  email: Scalars['String'];
};


export type MutationCreateRevisionArgs = {
  updateProjectInput: UpdateProjectInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteCardTemplateArgs = {
  cardTemplateId: Scalars['String'];
};


export type MutationDeleteEnterpriseArgs = {
  enterpriseIds: Array<Scalars['String']>;
};


export type MutationDeleteImagesArgs = {
  imageIds: Array<Scalars['ID']>;
};


export type MutationDeleteOrderArgs = {
  orderIds: Array<Scalars['String']>;
};


export type MutationDeletePostArgs = {
  PostId: Scalars['String'];
};


export type MutationDeletePostCategoryArgs = {
  CategoryId: Scalars['String'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['String'];
};


export type MutationDeleteProjectCategory_OldArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRevisionArgs = {
  revisionId: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUsersArgs = {
  idsDto: IdsDto;
};


export type MutationDestroyImagesArgs = {
  imageIds: Array<Scalars['ID']>;
};


export type MutationGetAccessTokenArgs = {
  Refreshtoken: ResetTokenInput;
};


export type MutationLogOutArgs = {
  Options: LogOutInput;
};


export type MutationPauseProjectArgs = {
  id: Scalars['String'];
};


export type MutationPublishProjectArgs = {
  id: Scalars['String'];
};


export type MutationRegisterArgs = {
  RegisterInput: RegisterInput;
};


export type MutationRegisterAmbassadorArgs = {
  fundraisingTarget: Scalars['Float'];
  projectId: Scalars['String'];
};


export type MutationRemoveAmbassadorArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRemoveAmbassadorProjectArgs = {
  id: Scalars['String'];
};


export type MutationSignInArgs = {
  LoginInput: LoginInput;
};


export type MutationSubmitProjectArgs = {
  id: Scalars['String'];
};


export type MutationSubmitRevisionArgs = {
  revisionId: Scalars['String'];
};


export type MutationUpdateAmbassadorProjectArgs = {
  updateAmbassadorProjectInput: UpdateAmbassadorProjectInput;
};


export type MutationUpdateAvatarImageArgs = {
  updateMediaDto: UpdateMediaDto;
};


export type MutationUpdateCardTemplateArgs = {
  cardTemplate: UpdateCardTemplateDto;
};


export type MutationUpdateCoverImageArgs = {
  updateMediaDto: UpdateMediaDto;
};


export type MutationUpdateDefaultSettingArgs = {
  defaultSetting: UpdateDefaultSettingDto;
};


export type MutationUpdateECardSettingArgs = {
  eCardSetting: ECardSettingDto;
};


export type MutationUpdateEnterpriseArgs = {
  enterprise: UpdateEnterpriseDto;
};


export type MutationUpdateFundArgs = {
  updateFundDto: UpdateFundDto;
};


export type MutationUpdateOrderArgs = {
  orderId: Scalars['String'];
  status: Scalars['String'];
};


export type MutationUpdateOrderEcardStatusArgs = {
  orderId: Scalars['String'];
  orderStatus: OrderEcardStatus;
};


export type MutationUpdatePaymentSettingArgs = {
  parameters: UpdatePaymentSettingDto;
};


export type MutationUpdatePostArgs = {
  UpdatePostInput: UpdatePostInput;
};


export type MutationUpdatePostCategoryArgs = {
  UpdateCategoryPostInput: UpdateCategoryInput;
};


export type MutationUpdateProjectCategoryArgs = {
  updateProjectCategoryDto: UpdateProjectCategoryDto;
};


export type MutationUpdateProjectCategory_OldArgs = {
  updateProjectCategoryInput: UpdateProjectCategoryInput;
};


export type MutationUpdateProject_OldArgs = {
  updateProjectInput: UpdateProjectInput;
};


export type MutationUpdateReciprocalStatusCardArgs = {
  UpdateReciprocalCardInput: UpdateReciprocalCardInput;
};


export type MutationUpdateRevisionArgs = {
  updateProjectInput: UpdateProjectInput;
};


export type MutationUpdateUserArgs = {
  updateUserDto: UpdateUserDto;
};


export type MutationUpdateUserByAdminArgs = {
  updateUserDto: CreateUserInput;
  userId: Scalars['String'];
};


export type MutationUploadImagesArgs = {
  uploadImageInput: UploadImageInput;
};


export type MutationUseCardsArgs = {
  useCardInput: UseCardInput;
};

export type Notification = {
  __typename?: 'Notification';
  /** content of notification */
  content: Scalars['String'];
  /** ID notification */
  notificationID: Scalars['String'];
  /** owner of notification */
  ownerID: Scalars['String'];
  /** recipients notification */
  recipients: Array<Scalars['String']>;
  /** notification type */
  type: NotificationTypes;
};

export enum NotificationTypes {
  Created = 'created'
}

export type NumericPaginationBase = {
  __typename?: 'NumericPaginationBase';
  currentPage?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
};

export type OptionsEnterpriseDto = {
  limit: Scalars['Int'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  /** enterprise's status */
  status?: InputMaybe<EnterpriseStatus>;
  /** enterprise's username */
  userName?: InputMaybe<Scalars['String']>;
};

export type OptionsOrderDto = {
  limit: Scalars['Int'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  /** order status using filter */
  status?: InputMaybe<OrderStatus>;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  codeDonate: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  listProjectByOrder: Project;
  markNameAnonymous: Scalars['Boolean'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  projectName: Scalars['String'];
  status: OrderStatus;
  totalMoney: Scalars['Float'];
  updatedAt: Scalars['Timestamp'];
  userId?: Maybe<Scalars['String']>;
};

export type OrderCardRes = {
  __typename?: 'OrderCardRes';
  data: Array<OrderEcard>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export type OrderEcard = {
  __typename?: 'OrderEcard';
  _id: Scalars['ID'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  hookCalledAt: Scalars['String'];
  paymentType: PaymentType;
  receivers: Array<Receivers>;
  sender?: Maybe<Sender>;
  status: OrderEcardStatus;
  templateId: Scalars['String'];
  tips: Scalars['Float'];
  totalAmount: Scalars['Float'];
  updatedAt: Scalars['Timestamp'];
};

export enum OrderEcardStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Processing = 'PROCESSING'
}

export enum OrderSortOptions {
  CreatedAtTimeAscending = 'CREATED_AT_TIME_ASCENDING',
  CreatedAtTimeDescending = 'CREATED_AT_TIME_DESCENDING',
  IdAscending = 'ID_ASCENDING',
  IdDescending = 'ID_DESCENDING',
  TotalAmountAscending = 'TOTAL_AMOUNT_ASCENDING',
  TotalAmountDescending = 'TOTAL_AMOUNT_DESCENDING'
}

export type OrderSortOptionsInput = {
  sortBy?: InputMaybe<OrderSortOptions>;
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Payment = 'PAYMENT',
  Pending = 'PENDING',
  Processing = 'PROCESSING'
}

export type OrderV1 = {
  __typename?: 'OrderV1';
  /** order's amount money */
  amount?: Maybe<Scalars['Float']>;
  /** order currency type: VND, USD */
  currency: Scalars['String'];
  /** order key */
  key: Scalars['String'];
  /** order's name */
  name?: Maybe<Scalars['String']>;
  /** orderId in mysql */
  orderId: Scalars['Float'];
  /** payment gateway */
  paymentGateway: PaymentType;
  project?: Maybe<ProjectV1>;
  /** project id */
  projectId?: Maybe<Scalars['ID']>;
  /** project name */
  projectName?: Maybe<Scalars['String']>;
  /** order's status */
  status: OrderV1StatusEnum;
  /** supporter */
  supporter: Supporter;
};

export enum OrderV1StatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Payment = 'PAYMENT',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Sh = 'SH'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
};

export type PaginationInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PagingEnterprise = {
  __typename?: 'PagingEnterprise';
  /** list enterprises */
  enterprises: Array<Enterprise>;
  /** amount enterprise */
  total: Scalars['Float'];
};

export type PagingOrder = {
  __typename?: 'PagingOrder';
  /** orders list */
  orders: Array<Order>;
  /** amount orders */
  total: Scalars['Float'];
};

export type Payment = {
  __typename?: 'Payment';
  type: PaymentType;
  url: Scalars['String'];
};

export type PaymentEnable = {
  __typename?: 'PaymentEnable';
  enable: Scalars['Boolean'];
  gateway: Scalars['String'];
};

export type PaymentSetting = {
  __typename?: 'PaymentSetting';
  /** viettel pay gateway */
  viettelPay?: Maybe<ViettelPaySetting>;
  /** Vnpay gateway */
  vnPay?: Maybe<VnPaySetting>;
};

export enum PaymentType {
  Viettelpay = 'VIETTELPAY',
  Vnpay = 'VNPAY'
}

export type Post = {
  __typename?: 'Post';
  _id: Scalars['ID'];
  categoryName: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  getAuthorByPost: User;
  htmlText: Scalars['String'];
  imgSrc: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['ID'];
  acceptAmbassador: Scalars['Boolean'];
  acceptReciprocal: Scalars['Boolean'];
  /** Category that project belong to */
  categoryId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  currentAmount: Scalars['Float'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  /** End date of project */
  endDate: Scalars['String'];
  fullDescription?: Maybe<Scalars['String']>;
  fundId: Scalars['String'];
  listAmbassadorsByProjectIdAndStatus_old: Array<User>;
  listAmbassadorsByProjectId_old: Array<User>;
  listDonate_old: Array<Order>;
  /** Name of project */
  name: Scalars['String'];
  reciprocal?: Maybe<Reciprocal>;
  revisionOf?: Maybe<Scalars['String']>;
  shortDescription: Scalars['String'];
  /** Start date of project */
  startDate: Scalars['String'];
  status: ProjectStatus;
  suggestAmount: Scalars['Float'];
  /** Target amount of project */
  targetAmount: Scalars['Float'];
  updatedAt: Scalars['Timestamp'];
};


export type ProjectListAmbassadorsByProjectIdAndStatus_OldArgs = {
  ambassadorStatus: Scalars['String'];
};

export type ProjectCategory = {
  __typename?: 'ProjectCategory';
  _id: Scalars['ID'];
  count: Scalars['Float'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  name: Scalars['String'];
  /** ID of parrent category */
  parentId?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type ProjectRevision = {
  __typename?: 'ProjectRevision';
  _id: Scalars['ID'];
  /** does project accept ambassador ? */
  acceptAmbassador?: Maybe<Scalars['Boolean']>;
  /** does project accept ambassador ? */
  acceptReciprocal?: Maybe<Scalars['Boolean']>;
  /** project's avatar */
  avatarImageId?: Maybe<Scalars['ID']>;
  /** category of project */
  categoryId: Scalars['ID'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  /** project's end date */
  endDate?: Maybe<Scalars['Timestamp']>;
  /** project's fullDescription */
  fullDescription?: Maybe<Scalars['String']>;
  /** fund id of project */
  fundId: Scalars['String'];
  /** project's album */
  imageIds?: Maybe<Array<Scalars['ID']>>;
  /** project's name */
  name: Scalars['String'];
  /** revision of ? */
  revisionOf?: Maybe<Scalars['ID']>;
  /** project's shortDescription */
  shortDescription: Scalars['String'];
  /** project's slug */
  slug?: Maybe<Scalars['String']>;
  /** project's start date */
  startDate?: Maybe<Scalars['Timestamp']>;
  /** project's status */
  status: ProjectV1Status;
  /** project's suggestAmount */
  suggestAmount?: Maybe<Scalars['Float']>;
  /** project's target amount */
  targetAmount: Scalars['Float'];
  updatedAt: Scalars['Timestamp'];
};

export enum ProjectStatus {
  OnPause = 'ON_PAUSE',
  Pending = 'PENDING',
  Published = 'PUBLISHED',
  WaitAdminApprovedPause = 'WAIT_ADMIN_APPROVED_PAUSE'
}

export type ProjectV1 = {
  __typename?: 'ProjectV1';
  _id: Scalars['ID'];
  /** does project accept ambassador ? */
  acceptAmbassador?: Maybe<Scalars['Boolean']>;
  /** does project accept ambassador ? */
  acceptReciprocal?: Maybe<Scalars['Boolean']>;
  album?: Maybe<Array<Image>>;
  avatar?: Maybe<Image>;
  /** project's avatar */
  avatarImageId?: Maybe<Scalars['ID']>;
  category?: Maybe<ProjectV1Category>;
  /** category of project */
  categoryId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['Timestamp'];
  /** project's current amount */
  currentAmount?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  /** project's end date */
  endDate?: Maybe<Scalars['Timestamp']>;
  /** project's fullDescription */
  fullDescription?: Maybe<Scalars['String']>;
  /** fund id of project */
  fundId: Scalars['String'];
  /** project's album */
  imageIds?: Maybe<Array<Scalars['ID']>>;
  /** project's name */
  name: Scalars['String'];
  /** project's photo in givenow db old */
  photoUrl?: Maybe<Scalars['String']>;
  /** projectId is ID of fund in givenow */
  projectId?: Maybe<Scalars['Float']>;
  /** project's shortDescription */
  shortDescription: Scalars['String'];
  /** project's slug */
  slug?: Maybe<Scalars['String']>;
  /** project's start date */
  startDate?: Maybe<Scalars['Timestamp']>;
  /** project's status */
  status: ProjectV1Status;
  /** project's suggestAmount */
  suggestAmount?: Maybe<Scalars['Float']>;
  /** project's target amount */
  targetAmount: Scalars['Float'];
  updatedAt: Scalars['Timestamp'];
};

export type ProjectV1Category = {
  __typename?: 'ProjectV1Category';
  _id: Scalars['ID'];
  /** ID of mysql db */
  categoryId?: Maybe<Scalars['Float']>;
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  /** project category name */
  name: Scalars['String'];
  /** project category slug */
  slug: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type ProjectV1Res = {
  __typename?: 'ProjectV1Res';
  data: Array<ProjectV1>;
  pageInfo?: Maybe<NumericPaginationBase>;
  total: Scalars['Int'];
};

export enum ProjectV1Status {
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  OnPause = 'ON_PAUSE',
  Pending = 'PENDING',
  Private = 'PRIVATE',
  Publish = 'PUBLISH',
  Trash = 'TRASH',
  WaitAdminApprovedPause = 'WAIT_ADMIN_APPROVED_PAUSE'
}

export type Query = {
  __typename?: 'Query';
  allCardTemplates: CardTemplateRes;
  /** get all funds */
  allFunds: Array<Fund>;
  allProjectCategories: Array<ProjectV1Category>;
  allProjectCategories_old: Array<ProjectCategory>;
  allProjects: Array<ProjectV1>;
  allSetting: Array<Setting>;
  ambassadorProject: AmbassadorProject;
  ambassadorProjects: Array<AmbassadorProject>;
  ambassadors: Array<User>;
  cardTemplate: CardTemplate;
  cardTemplates: CardTemplateRes;
  dashboard: Dashboard;
  defaultSetting: DefaultSetting;
  eCardSetting: ECardSetting;
  enterprises: PagingEnterprise;
  exportOrders: Scalars['String'];
  exportProjectsOfAmbassador: Scalars['String'];
  findCardById?: Maybe<Card>;
  findPostById: Post;
  findPostsByCond: ListPost;
  /** get fund by id */
  fund: Fund;
  /** admin get funds, <has paging> */
  funds: FundPagingRes;
  getAllOrders: OrderCardRes;
  getAllProject_old: Array<Project>;
  getCards?: Maybe<AllCardResponseType>;
  getCategoryPostByName: Category;
  getListOrders: ListOrder;
  getOrderEcardDetail: OrderEcard;
  getOrderList: OrderCardRes;
  getProjectByFund_old: Array<Project>;
  getProjectById_old: Project;
  getProjectCategoryByName_old: ProjectCategory;
  getProjectCategoryId_old: Array<Project>;
  getRevisionsOfProject: Array<Revision>;
  getRunningProjects_old: Array<Project>;
  listAllImage: ListImage;
  listAmbassadorProject: Array<AmbassadorProject>;
  listImageByImageIds: ListImage;
  listImageByUploadedBy: ListImage;
  orders: PagingOrder;
  ordersV1: Array<OrderV1>;
  paymentGatewaysEnable: Array<PaymentEnable>;
  paymentSetting: PaymentSetting;
  /** project categories */
  projectCategories: Array<ProjectV1Category>;
  projectsInExpirationDate: Array<ProjectV1>;
  projectsV1Paging: ProjectV1Res;
  totalCardTemplates: Scalars['Float'];
  user?: Maybe<User>;
  users: AllUserResponseType;
};


export type QueryAllProjectsArgs = {
  status?: InputMaybe<ProjectV1Status>;
};


export type QueryAmbassadorProjectArgs = {
  id: Scalars['String'];
};


export type QueryAmbassadorsArgs = {
  listAmbassadorInput: ListAmbassadorInput;
};


export type QueryCardTemplateArgs = {
  cardTemplateId: Scalars['String'];
};


export type QueryCardTemplatesArgs = {
  findOption: FindOptionCardTemplateDto;
};


export type QueryEnterprisesArgs = {
  options?: InputMaybe<OptionsEnterpriseDto>;
};


export type QueryExportOrdersArgs = {
  exportOption: ExportOrderDto;
};


export type QueryExportProjectsOfAmbassadorArgs = {
  exportProject: ExportProjectAmbassadorDto;
};


export type QueryFindCardByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindPostByIdArgs = {
  postId: Scalars['String'];
};


export type QueryFindPostsByCondArgs = {
  FindPostsInput: FindPostsInput;
};


export type QueryFundArgs = {
  filter: FilterFundDto;
};


export type QueryFundsArgs = {
  filter: FilterFundPagingDto;
};


export type QueryGetAllProject_OldArgs = {
  queryInput: QueryInput;
  sortOrder: SortOrderInput;
};


export type QueryGetCardsArgs = {
  cardFilterDto?: InputMaybe<CardFilterDto>;
};


export type QueryGetCategoryPostByNameArgs = {
  CategoryName: Scalars['String'];
};


export type QueryGetListOrdersArgs = {
  ListOrdersInput: ListOrdersInput;
};


export type QueryGetOrderEcardDetailArgs = {
  orderId: Scalars['String'];
};


export type QueryGetOrderListArgs = {
  queryOptions: QueryOptionOrderInput;
  sortOption?: InputMaybe<OrderSortOptionsInput>;
};


export type QueryGetProjectByFund_OldArgs = {
  fundId: Scalars['String'];
};


export type QueryGetProjectById_OldArgs = {
  id: Scalars['String'];
};


export type QueryGetProjectCategoryByName_OldArgs = {
  name: Scalars['String'];
};


export type QueryGetProjectCategoryId_OldArgs = {
  projectCategoryId: Scalars['String'];
};


export type QueryGetRevisionsOfProjectArgs = {
  projectId: Scalars['String'];
};


export type QueryListAllImageArgs = {
  listAllImageInput?: InputMaybe<ListAllImageInput>;
};


export type QueryListAmbassadorProjectArgs = {
  listAmbassadorProjectInput: ListAmbassadorProjectInput;
};


export type QueryListImageByImageIdsArgs = {
  listImageByImageIdsInput: ListImageByImageIdsInput;
};


export type QueryListImageByUploadedByArgs = {
  listImageByUploadedByInput: ListImageByUploadedByInput;
};


export type QueryOrdersArgs = {
  options?: InputMaybe<OptionsOrderDto>;
};


export type QueryOrdersV1Args = {
  filter?: InputMaybe<FilterOrderV1>;
};


export type QueryProjectCategoriesArgs = {
  filter: FilterProjectCategoryDto;
};


export type QueryProjectsV1PagingArgs = {
  findProjectDto: FindProjectDto;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  queryArgsDto?: InputMaybe<UserQueryArgsDto>;
};

export type QueryInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<ProjectStatus>;
};

export type QueryOptionOrderInput = {
  endDate?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Int']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  paymentType?: InputMaybe<PaymentType>;
  senderEmail?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<OrderEcardStatus>;
};

export type ReceiverInput = {
  amount: Scalars['Float'];
  dateSend: Scalars['Int'];
  email: Scalars['String'];
  message: Scalars['String'];
};

export type Receivers = {
  __typename?: 'Receivers';
  amount: Scalars['Float'];
  dateSend: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
};

export type Reciprocal = {
  __typename?: 'Reciprocal';
  /** amount money which reciprocal company pay for project */
  amount: Scalars['Float'];
  /** ID of reciprocal company */
  company: Scalars['String'];
  /** Method of reciprocal */
  method: ReciprocalMethod;
  /** Value of repciprocal */
  value: Scalars['Float'];
};

export type ReciprocalInput = {
  /** ID of reciprocal company */
  company: Scalars['String'];
  /** Method of reciprocal */
  method: ReciprocalMethod;
  /** Value of repciprocal */
  value: Scalars['Float'];
};

export enum ReciprocalMethod {
  EachDonatedTime = 'EACH_DONATED_TIME',
  TotalAmountDonated = 'TOTAL_AMOUNT_DONATED'
}

export type ReciprocalV1 = {
  __typename?: 'ReciprocalV1';
  /** amount money which reciprocal enterprise pay for project */
  amount: Scalars['Float'];
  /** ID of reciprocal enterprise */
  enterpriseId: Scalars['ID'];
  /** Method of reciprocal */
  method: ReciprocalV1Method;
  /** ID of project */
  projectId: Scalars['ID'];
  /** reciprocal ratio */
  ratio: Scalars['Float'];
};

export enum ReciprocalV1Method {
  EachDonatedTime = 'EACH_DONATED_TIME',
  TotalAmountDonated = 'TOTAL_AMOUNT_DONATED'
}

export type RegisterEntity = {
  __typename?: 'RegisterEntity';
  email: Scalars['String'];
  id: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ResetTokenInput = {
  refreshToken: Scalars['String'];
};

export type Revision = {
  __typename?: 'Revision';
  _id: Scalars['ID'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  /** The id of origin project */
  publishedProject: Scalars['String'];
  revisedBy?: Maybe<Scalars['String']>;
  /** The id of revision project */
  revision: Scalars['String'];
  revisionDate: Scalars['String'];
  status: RevisionStatus;
  type: RevisionType;
  updatedAt: Scalars['Timestamp'];
};

export enum RevisionStatus {
  NotSubmitted = 'NOT_SUBMITTED',
  Submitted = 'SUBMITTED'
}

export enum RevisionType {
  Project = 'PROJECT'
}

export enum Role {
  Admin = 'ADMIN',
  Enterprise = 'ENTERPRISE',
  Fund = 'FUND',
  SubAdmin = 'SUB_ADMIN',
  User = 'USER'
}

export type Sender = {
  __typename?: 'Sender';
  email?: Maybe<Scalars['String']>;
  enableNotification: Scalars['Boolean'];
  fullName?: Maybe<Scalars['String']>;
  isAnonymousMode: Scalars['Boolean'];
};

export type SenderInput = {
  email: Scalars['String'];
  enableNotification?: InputMaybe<Scalars['Boolean']>;
  fullName: Scalars['String'];
  isAnonymousMode?: InputMaybe<Scalars['Boolean']>;
};

export type Setting = {
  __typename?: 'Setting';
  _id: Scalars['ID'];
  createdAt: Scalars['Timestamp'];
  createdBy: Scalars['String'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  name: SettingOptionsEnum;
  updatedAt: Scalars['Timestamp'];
  updatedBy: Scalars['String'];
  userCreateDetail?: Maybe<User>;
  userUpdateDetail?: Maybe<User>;
};

export enum SettingOptionsEnum {
  DefaultSetting = 'DEFAULT_SETTING',
  ECardSetting = 'E_CARD_SETTING',
  PaymentSetting = 'PAYMENT_SETTING'
}

export type SetupViettelPayGateway = {
  /** access code */
  accessCode: Scalars['String'];
  /** payment gateway is enable or unable */
  enable?: InputMaybe<Scalars['Boolean']>;
  /** hash code verify */
  hashKey: Scalars['String'];
  /** partner's code */
  partnerCode: Scalars['String'];
  /** partner's name */
  partnerName: Scalars['String'];
  /** url data return to givenow system */
  returnUrl: Scalars['String'];
  /** url connect viettelPay */
  url: Scalars['String'];
};

export type SetupVnPayGateway = {
  /** payment gateway is enable or unable */
  enable?: InputMaybe<Scalars['Boolean']>;
  hashSecret: Scalars['String'];
  returnUrl: Scalars['String'];
  tmnCode: Scalars['String'];
  url: Scalars['String'];
};

export type Sort = {
  fieldToSorted: UserFieldToSorted;
  sortOption: SortOption;
};

export enum SortOption {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortOrder {
  CreatedAcs = 'CREATED_ACS',
  CreatedDes = 'CREATED_DES',
  DeletedAcs = 'DELETED_ACS',
  DeletedDes = 'DELETED_DES',
  UpdatedAcs = 'UPDATED_ACS',
  UpdatedDes = 'UPDATED_DES'
}

export type SortOrderInput = {
  sortOrder?: InputMaybe<Scalars['Float']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  exportNotification: Notification;
};

export type Supporter = {
  __typename?: 'Supporter';
  /** address */
  address?: Maybe<Scalars['String']>;
  /** email */
  email?: Maybe<Scalars['String']>;
  /** phone */
  phone?: Maybe<Scalars['String']>;
  /** supporterId */
  supporterId?: Maybe<Scalars['Float']>;
};

export type UpdateAmbassadorProjectInput = {
  _id: Scalars['String'];
  ambassadorId?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  targetDonate?: InputMaybe<Scalars['Float']>;
};

export type UpdateCardTemplateDto = {
  /** card-template id */
  cardTemplateId: Scalars['String'];
  /** card-template's category */
  category?: InputMaybe<Scalars['String']>;
  /** card-template's image id */
  imageId?: InputMaybe<Scalars['String']>;
  /** card-template's name */
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  categoryId: Scalars['String'];
  name: Scalars['String'];
};

export type UpdateDefaultSettingDto = {
  fromAddress?: InputMaybe<Scalars['String']>;
  host: Scalars['String'];
  pass: Scalars['String'];
  port: Scalars['Int'];
  senderName?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
};

export type UpdateEnterpriseDto = {
  /** Enterprise's avatar */
  avatar: Scalars['String'];
  /** Enterprise's cover image */
  coverImage: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<EnterpriseStatus>;
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateFundDto = {
  /** address */
  address?: InputMaybe<Scalars['String']>;
  /** fund description */
  description?: InputMaybe<Scalars['String']>;
  /** fund email */
  email?: InputMaybe<Scalars['String']>;
  /** hotline */
  hotline?: InputMaybe<Scalars['String']>;
  /** fundId will be update */
  id: Scalars['ID'];
  /** fund name */
  name?: InputMaybe<Scalars['String']>;
  /** fund url website */
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateMediaDto = {
  id: Scalars['String'];
};

export type UpdateOrderInput = {
  _id: Scalars['String'];
  address?: InputMaybe<Scalars['String']>;
  codeDonate?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  markNameAnonymous?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  status: OrderStatus;
  totalMoney?: InputMaybe<Scalars['Float']>;
};

export type UpdatePaymentSettingDto = {
  viettelPay?: InputMaybe<SetupViettelPayGateway>;
  vnPay?: InputMaybe<SetupVnPayGateway>;
};

export type UpdatePostInput = {
  /** Id of project which user want to modify */
  _id: Scalars['ID'];
  authorId?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  htmlText?: InputMaybe<Scalars['String']>;
  imgSrc?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectCategoryDto = {
  /** project category id  */
  id: Scalars['String'];
  /** category name */
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectCategoryInput = {
  _id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['ID']>;
};

export type UpdateProjectInput = {
  /** Id of project which user want to modify */
  _id: Scalars['ID'];
  /** User can choose whether they accept the ambassador */
  acceptAmbassador?: InputMaybe<Scalars['Boolean']>;
  /** The user can choose whether they accept company reciprocal company */
  acceptReciprocal?: InputMaybe<Scalars['Boolean']>;
  /** Category of project */
  categoryId?: InputMaybe<Scalars['String']>;
  /** End date of project */
  endDate?: InputMaybe<Scalars['String']>;
  /** Full description of project */
  fullDescription?: InputMaybe<Scalars['String']>;
  /** Fund of project */
  fundId?: InputMaybe<Scalars['String']>;
  /** Name of project */
  name?: InputMaybe<Scalars['String']>;
  /** reciprocal */
  reciprocal?: InputMaybe<ReciprocalInput>;
  revisionOf?: InputMaybe<Scalars['String']>;
  /** Short description of project */
  shortDescription?: InputMaybe<Scalars['String']>;
  /** Start date of project */
  startDate?: InputMaybe<Scalars['String']>;
  /** Suggest amount that the fund want */
  suggestAmount?: InputMaybe<Scalars['Float']>;
  /** Target amount that the fund want */
  targetAmount?: InputMaybe<Scalars['Float']>;
};

export type UpdateReciprocalCardInput = {
  listECardIds: Array<Scalars['String']>;
};

export type UpdateUserDto = {
  addressDetail: Scalars['String'];
  backIdentifyCardImageId: Scalars['String'];
  city: Scalars['String'];
  dateOfBirth?: InputMaybe<Scalars['String']>;
  district: Scalars['String'];
  facebookUrl?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  frontIdentifyCardImageId: Scalars['String'];
  gender: Gender;
  identifyNumber: Scalars['String'];
  lastName: Scalars['String'];
  mailReceive: Scalars['Boolean'];
  phoneNumber: Scalars['String'];
  subDistrict: Scalars['String'];
};

export type UploadImageInput = {
  description?: InputMaybe<Scalars['String']>;
  dimension?: InputMaybe<Dimension>;
  files: Array<Scalars['Upload']>;
};

export type UseCardInput = {
  code: Scalars['String'];
  donateInfo?: InputMaybe<DonateInfoInput>;
  /** projectId is ID in mysql */
  projectId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  /** is userId from users sync from mysql db */
  accountId?: Maybe<Scalars['Float']>;
  accountType: AccountType;
  addressDetail?: Maybe<Scalars['String']>;
  amountFundrasing: Scalars['Float'];
  avatarImage?: Maybe<Image>;
  backIdentifyCardImage?: Maybe<Image>;
  city?: Maybe<Scalars['String']>;
  codeDonate?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Image>;
  createdAt: Scalars['Timestamp'];
  dateOfBirth?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  /** user's display name */
  displayName?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  donatedOfAmbassador: Scalars['Float'];
  email: Scalars['String'];
  facebookUrl?: Maybe<Scalars['String']>;
  fbid?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  frontIdentifyCardImage?: Maybe<Image>;
  gender?: Maybe<Gender>;
  hotline: Scalars['String'];
  identifyNumber?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  listAmbassadorProjectsbyUserId: Array<AmbassadorProject>;
  listProjectsOfAmbassador: Array<Project>;
  mailReceive?: Maybe<Scalars['Boolean']>;
  payment: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  projectsIsEndedOfAmbassador: Array<Project>;
  projectsIsRunningOfAmbassador: Array<Project>;
  role: Role;
  status: UserStatus;
  subDistrict?: Maybe<Scalars['String']>;
  totalFundByAmbassadorId: Scalars['Int'];
  totalPeopleDonateAmbassador: Scalars['Int'];
  totalProjectOfAmbassador: Scalars['Int'];
  updatedAt: Scalars['Timestamp'];
  website?: Maybe<Scalars['String']>;
};

export enum UserFieldToSorted {
  CreatedAt = 'CREATED_AT',
  DeletedAt = 'DELETED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type UserQueryArgsDto = {
  accountType?: InputMaybe<AccountType>;
  gender?: InputMaybe<Gender>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  mailReceive?: InputMaybe<Scalars['Boolean']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Role>;
  sort?: InputMaybe<Sort>;
  status?: InputMaybe<UserStatus>;
};

export type UserRoleInFund = {
  __typename?: 'UserRoleInFund';
  _id: Scalars['ID'];
  /** address */
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  /** fund description */
  description?: Maybe<Scalars['String']>;
  /** fund email */
  email: Scalars['String'];
  /** fundId is ID of fund in givenow */
  fundId?: Maybe<Scalars['Float']>;
  /** hotline */
  hotline?: Maybe<Scalars['String']>;
  /** fund name */
  name?: Maybe<Scalars['String']>;
  /** user's role in fund */
  role: FundRolesEnum;
  updatedAt: Scalars['Timestamp'];
  /** fund url website */
  website?: Maybe<Scalars['String']>;
};

export enum UserStatus {
  NotVerified = 'NOT_VERIFIED',
  Verified = 'VERIFIED'
}

export type ViettelPaySetting = {
  __typename?: 'ViettelPaySetting';
  /** access code */
  accessCode: Scalars['String'];
  /** payment gateway mode: on or off  */
  enable: Scalars['Boolean'];
  /** hash code verify */
  hashKey: Scalars['String'];
  /** partner's code */
  partnerCode: Scalars['String'];
  /** partner's name */
  partnerName: Scalars['String'];
  /** url data return to givenow system */
  returnUrl: Scalars['String'];
  /** url connect viettelPay */
  url: Scalars['String'];
};

export type VnPaySetting = {
  __typename?: 'VnPaySetting';
  /** payment gateway mode: on or off  */
  enable: Scalars['Boolean'];
  hashSecret: Scalars['String'];
  returnUrl: Scalars['String'];
  tmnCode: Scalars['String'];
  url: Scalars['String'];
};

export type GetAllProjectsQueryVariables = Exact<{
  status?: InputMaybe<ProjectV1Status>;
}>;


export type GetAllProjectsQuery = { __typename?: 'Query', allProjects: Array<{ __typename?: 'ProjectV1', name: string, _id: string, status: ProjectV1Status, startDate?: any | null, endDate?: any | null, targetAmount: number, currentAmount?: number | null, slug?: string | null, createdAt: any, photoUrl?: string | null, imageIds?: Array<string> | null, avatarImageId?: string | null, avatar?: { __typename?: 'Image', fileOriginUrl: string } | null, album?: Array<{ __typename?: 'Image', fileOriginUrl: string }> | null, category?: { __typename?: 'ProjectV1Category', _id: string, name: string } | null }> };


export const GetAllProjectsDocument = `
    query getAllProjects($status: ProjectV1Status) {
  allProjects(status: $status) {
    name
    _id
    status
    startDate
    endDate
    targetAmount
    currentAmount
    slug
    createdAt
    photoUrl
    status
    imageIds
    avatarImageId
    avatar {
      fileOriginUrl
    }
    album {
      fileOriginUrl
    }
    category {
      _id
      name
    }
  }
}
    `;
export const useGetAllProjectsQuery = <
      TData = GetAllProjectsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllProjectsQueryVariables,
      options?: UseQueryOptions<GetAllProjectsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllProjectsQuery, TError, TData>(
      variables === undefined ? ['getAllProjects'] : ['getAllProjects', variables],
      fetcher<GetAllProjectsQuery, GetAllProjectsQueryVariables>(client, GetAllProjectsDocument, variables, headers),
      options
    );