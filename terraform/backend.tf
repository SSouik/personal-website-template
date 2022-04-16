terraform {
  #   backend "s3" {
  #     bucket = "" # Replace with the name of the S3 bucket to place remote state
  #     key    = "" # Name of the .tfstate file in the S3 bucket
  #     region = "us-east-1"
  #   }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
