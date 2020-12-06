# cloud-build
GCP Cloud Build  

* gcloud alpha run deploy cloud-build \
   --image gcr.io/ilkerispir/cloud-build \
   --vpc-connector test-vpc \
   --vpc-egress all \
   --region europe-west4 \
   --platform managed

* gcloud alpha run deploy cloud-build --image gcr.io/ilkerispir/cloud-build \
--vpc-connector projects/ilkerispir/locations/europe-west4/connectors/test-vpc \
--vpc-egress all \
--region europe-west4 \
--platform managed

* gcloud builds submit --tag gcr.io/ilkerispir/cloud-build
* gcloud run deploy --image gcr.io/ilkerispir/cloud-build --region europe-west4 --platform managed