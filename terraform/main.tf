terraform {
<<<<<<< HEAD
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = var.region
}
resource "aws_instance" "ec2_example" {

  ami                    = "ami-0767046d1677be5a0"
  instance_type          = "t2.micro"
  key_name               = "aws_key"
  vpc_security_group_ids = [aws_security_group.main.id]

  provisioner "remote-exec" {
    inline = [
      "touch hello.txt",
      "echo helloworld remote provisioner >> hello.txt",
    ]
  }
  connection {
    type        = "ssh"
    host        = self.public_ip
    user        = "ubuntu"
    private_key = file("/home/rahul/Jhooq/keys/aws/aws_key")
    timeout     = "4m"
  }
}

resource "aws_security_group" "main" {
  egress = [
    {
      cidr_blocks      = ["0.0.0.0/0", ]
      description      = ""
      from_port        = 0
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "-1"
      security_groups  = []
      self             = false
      to_port          = 0
    }
  ]
  ingress = [
    {
      cidr_blocks      = ["0.0.0.0/0", ]
      description      = ""
      from_port        = 22
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 22
    }
  ]
}


resource "aws_key_pair" "deployer" {
  key_name   = "aws_key"
  public_key = ""
}

output "serverip" {
  value = aws_instance.app.public_ip
}
=======
  required_version = ">= 0.12"
}

provider "aws" {
    region = "eu-west-1"
}
>>>>>>> fa0ed83a788d0f1606581458f6c398014b23620a
