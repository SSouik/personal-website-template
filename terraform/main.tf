locals {
  region         = "us-east-1"
  env            = "test"
  app_name       = "mywebsite-app"
  domain_name    = "www.mywebsite.com"
  acm_domain     = "*.mywebsite.com" # replace with the domain name attached to your ACM certificate
  hosted_zone_id = "ABC123"          # Replace with Hosted ZOne ID of your domain name

  # Custom error responses for AWS CloudFront
  responses = [
    {
      error_code         = 404,
      response_code      = 404,
      response_page_path = "/404"
    },
    {
      error_code         = 403,
      response_code      = 404,
      response_page_path = "/404"
    }
  ]

  s3_apps = {
    "mywebsite-app" = {
      domain_name = "www.mywebsite.bucket"
      s3_config = {
        error_document = "index.html"
        index_document = "index.html"
        force_destroy  = true
        acl            = "private"
      }
      app_config  = null
      origin_path = ""
      cache_behavior = {
        path_pattern    = "*"
        allowed_methods = ["GET", "HEAD"]
        cached_methods  = ["GET", "HEAD"]
        forwarded_values = {
          query_string = false
          cookies      = "none"
        }
        lambdas                = []
        default_ttl            = 3600
        min_ttl                = 0
        max_ttl                = 86400
        viewer_protocol_policy = "redirect-to-https"
      }
    }
  }
}

module "aws_cloudfront_app" {
  source                 = "git::https://github.com/SSouik/aws-cloudfront-app.git?ref=v2.1.0"
  region                 = local.region
  env                    = local.env
  app_name               = local.app_name
  domain_name            = local.domain_name
  cloudfront_responses   = local.responses
  use_acm_certificate    = true
  route53_zone_id        = local.hosted_zone_id
  acm_certificate_domain = local.acm_domain
  default_app_name       = "mywebsite-app" # Must match the name of your S3 App
  s3_app_configs         = local.s3_apps
}
