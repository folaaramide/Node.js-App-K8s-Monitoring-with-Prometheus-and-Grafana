# 🚀 Kubernetes Monitoring with Prometheus & Grafana + Node.js App (Forked Node.js App, an open-source Node.js project, modified to expose Prometheus metrics

A complete DevOps project demonstrating how to deploy a **Node.js application** on a **Kubernetes cluster**, and monitor it using **Prometheus** and **Grafana**, all integrated via **Helm**.

## 📌 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Prerequisites](#prerequisites)
4. [Installation Guide](#installation-guide)
   - [Install Prometheus & Grafana using Helm](#install-prometheus--grafana-using-helm)
   - [Accessing Dashboards](#accessing-dashboards)
5. [Deploy the Node.js App](#deploy-the-nodejs-app)
6. [Prometheus Configuration](#prometheus-configuration)
7. [Grafana Dashboards](#grafana-dashboards)
8. [Cleanup](#cleanup)
9. [Screenshots](#screenshots)
10. [Connect with Me](#connect-with-me)

## 🚀 Project Overview

This project demonstrates how to deploy a sample Node.js application on Kubernetes and monitor it using Prometheus and Grafana. The entire stack is deployed using Helm for easy management and scalability.

This is an ideal project for showcasing monitoring skills on Kubernetes, and how DevOps tools like Prometheus and Grafana integrate into the cloud-native ecosystem.

## 🧱 Architecture

[User] → [Kubernetes Ingress / Service] → [Node.js App Pod]

↓

[Prometheus] ← [ServiceMonitor] ← [Node.js App Metrics]

↓

[Grafana] ← [Prometheus Data Source]

## 📋 Prerequisites

- A running **Kubernetes Cluster** (minikube, kind, EKS, GKE, etc.)
- **Helm v3+** installed
- `kubectl` CLI access to your cluster

## 🛠️ Installation Guide

### Install Prometheus & Grafana using Helm

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm repo update

helm install kube-prometheus-stack prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace

### Accessing Dashboards

-Prometheus:

kubectl port-forward svc/kube-prometheus-stack-prometheus 9090 -n monitoring

Open: http://localhost:9090

-Grafana:

kubectl port-forward svc/kube-prometheus-stack-grafana 3000 -n monitoring

Open: http://localhost:3000

Default Credentials:

Username: admin

Password: prom-operator (or check via kubectl get secret)

## 🚀 Deploy the Node.js App

This project uses a forked Node.js application:

> 🔗 Forked From: [original-repo-name](https://github.com/original-owner/original-repo)
   
> 📁 Located in: `app/` directory
 
> 🧪 Enhanced with Prometheus client for metric exporting

Apply the following manifests:

kubectl apply -f nodejs-app-deployment.yaml

kubectl apply -f nodejs-app-service.yaml

Ensure the app exposes a /metrics endpoint compatible with Prometheus.

### Build & Push Docker Image
(Optional if you want to use your own registry)

cd app/

docker build -t your-dockerhub/nodejs-app:latest .

docker push your-dockerhub/nodejs-app:latest

Update image: in manifests/nodejs-app-deployment.yaml if using a custom image.

## 🔧 Prometheus Configuration

Create a Service Monitor to scrape metrics from the Node.js app:

kubectl apply -f service-monitor.yaml

## 📊 Grafana Dashboards

Import dashboard using:

Node Exporter Full (ID: 1860)

Kubernetes Cluster Monitoring (ID: 315)

Connect Prometheus as a data source.

## Screenshots

### Prometheus dashboard with targets

![Prometheus dashboard with targets]/Node.js-App-K8s-Monitoring-with-Prometheus-and-Grafana/screenshots/prometheus-target-tab.png

### Grafana Kubernetes monitoring dashboard

![Grafana Kubernetes monitoring dashboard]/screenshots/grafana-monitoring-dashbboard.png

### YAML of ServiceMonitor applied

![YAML of ServiceMonitor applied]/screenshots/applied-service-monitor-yaml.png

### Logs of the deployed Node.js app

![Logs of the deployed Node.js app]/screenshots/node.js.app-deployment.

### Output of /metrics endpoint from the app

![Output of /metrics endpoint from the app]/screenshots/app-metrics

