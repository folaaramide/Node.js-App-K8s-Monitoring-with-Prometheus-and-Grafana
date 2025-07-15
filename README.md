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

Apply the following manifests:

kubectl apply -f nodejs-app-deployment.yaml

kubectl apply -f nodejs-app-service.yaml

Ensure the app exposes a /metrics endpoint compatible with Prometheus.

## 🔧 Prometheus Configuration

Create a ServiceMonitor to scrape metrics from the Node.js app:

kubectl apply -f service-monitor.yaml

## 📊 Grafana Dashboards

Import dashboard using:

Node Exporter Full (ID: 1860)

Kubernetes Cluster Monitoring (ID: 315)

Connect Prometheus as a data source.
