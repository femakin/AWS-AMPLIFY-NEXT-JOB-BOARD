// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, JobList, ApplicantList } = initSchema(schema);

export {
  Users,
  JobList,
  ApplicantList
};