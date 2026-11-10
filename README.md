# Task 4: CI/CD Pipeline with GitHub Actions and Docker

## Project Overview

This project demonstrates an automated CI/CD pipeline using GitHub Actions and Docker. It automates application testing, Docker image building, and publishing the image to Docker Hub.

The application is deployed locally using Docker without requiring any cloud platform.

## Objectives

- Automate application testing using GitHub Actions.
- Build Docker images automatically.
- Push Docker images to Docker Hub.
- Deploy and run the Docker container locally.
- Understand the CI/CD workflow.

## Technologies Used

- Git and GitHub
- GitHub Actions
- Node.js
- Docker
- Docker Hub
- VS Code

## Project Structure

```text
Intern-Final-Project/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yaml
│
├── test/
│   └── app.test.js
│
├── app.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md
```

## CI/CD Pipeline Workflow

1. Developer pushes code to GitHub.
2. GitHub Actions automatically triggers the workflow.
3. Source code is checked out.
4. Node.js environment is configured.
5. Dependencies are installed.
6. Application tests are executed.
7. Docker Buildx is configured.
8. GitHub Actions logs in to Docker Hub using repository secrets.
9. Docker image is built and pushed to Docker Hub.

## Docker Hub Image

**Image Name:**

`madhudpdock/intern-project-cicd:latest`

Docker Hub: https://hub.docker.com/

## Local Deployment

Pull the Docker image:

```bash
docker pull madhudpdock/intern-project-cicd:latest
```

Run the Docker container:

```bash
docker run -d --name intern-final-deploy -p 3001:3000 madhudpdock/intern-project-cicd:latest
```

Verify the running container:

```bash
docker ps
```

Access the application:

http://localhost:3001

## GitHub Actions Secrets

The following repository secrets are configured:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

These secrets securely authenticate GitHub Actions with Docker Hub.

## Expected Outcomes

- Automated CI/CD pipeline execution.
- Successful application testing.
- Automated Docker image creation.
- Docker image successfully published to Docker Hub.
- Application successfully deployed and accessible locally.

## Conclusion

This project demonstrates how GitHub Actions and Docker can be integrated to automate application testing, container image building, and image publishing. It provides practical experience with CI/CD concepts and containerized application deployment without requiring cloud infrastructure.
