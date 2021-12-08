variable "AWS_ACCESS_KEY" {
  description = "AWS_ACCESS_KEY for BricksAndMortar User"
  type        = string
}

variable "AWS_SECRET_ACCESS_KEY" {
  description = "AWS_SECRET_ACCESS_KEY for BricksAndMortar User"
  type        = string
}
variable "region" {
  type    = string
  default = "eu-west-1"
}
