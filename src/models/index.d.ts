import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly role?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly role?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerJobList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly JobPosition?: string | null;
  readonly Category?: string | null;
  readonly Location?: string | null;
  readonly Experience?: string | null;
  readonly JobStatus?: string | null;
  readonly Agency?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly JobPosition?: string | null;
  readonly Category?: string | null;
  readonly Location?: string | null;
  readonly Experience?: string | null;
  readonly JobStatus?: string | null;
  readonly Agency?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobList = LazyLoading extends LazyLoadingDisabled ? EagerJobList : LazyJobList

export declare const JobList: (new (init: ModelInit<JobList>) => JobList) & {
  copyOf(source: JobList, mutator: (draft: MutableModel<JobList>) => MutableModel<JobList> | void): JobList;
}

type EagerApplicantList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ApplicantList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Message?: string | null;
  readonly PortfolioLink?: string | null;
  readonly Status?: string | null;
  readonly JobID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyApplicantList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ApplicantList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Message?: string | null;
  readonly PortfolioLink?: string | null;
  readonly Status?: string | null;
  readonly JobID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ApplicantList = LazyLoading extends LazyLoadingDisabled ? EagerApplicantList : LazyApplicantList

export declare const ApplicantList: (new (init: ModelInit<ApplicantList>) => ApplicantList) & {
  copyOf(source: ApplicantList, mutator: (draft: MutableModel<ApplicantList>) => MutableModel<ApplicantList> | void): ApplicantList;
}