# Node.js-App-K8s-Monitoring-with-Prometheus-and-Grafana
# 🔭 Kubernetes Monitoring with Prometheus, Grafana & Node.js App

This project demonstrates how to deploy a **Node.js application** on Kubernetes and monitor it using **Prometheus** and **Grafana**. The application is a [fork](#forked-nodejs-app) of an open-source Node.js project, modified to expose Prometheus metrics.

---

## 🚀 Features

- Node.js App deployed on Kubernetes
- Metrics exposed via `/metrics` endpoint
- Monitoring with Prometheus (Helm)
- Visualisation using Grafana Dashboards
- ServiceMonitor for custom metric scraping

---

## 🧾 Forked Node.js App

This project uses a forked Node.js application:

> 🔗 Forked From: [original-repo-name](https://github.com/original-owner/original-repo)  
> 📁 Located in: `app/` directory  
> 🧪 Enhanced with Prometheus client for metric exporting

---

## 🗂️ Project Structure

├── app/ # Forked Node.js app with Prometheus metrics
├── manifests/ # Kubernetes deployment & monitoring configs
├── dashboards/ # Grafana dashboard JSONs
├── screenshots/ # Images used in documentation
└── README.md

yaml
Copy
Edit

---

## 📋 Prerequisites

- Kubernetes Cluster (minikube, kind, GKE, etc.)
- Helm 3+
- `kubectl` CLI
- Docker (to build the app image)

---

## ⚙️ Installation Steps

### 1. Clone this Repository

```bash
git clone https://github.com/your-username/k8s-nodejs-monitoring.git
cd k8s-nodejs-monitoring
2. Build & Push Docker Image
(Optional if you want to use your own registry)

bash
Copy
Edit
cd app/
docker build -t your-dockerhub/nodejs-app:latest .
docker push your-dockerhub/nodejs-app:latest
Update image: in manifests/nodejs-app-deployment.yaml if using a custom image.

3. Deploy Prometheus & Grafana using Helm
bash
Copy
Edit
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install kube-prometheus-stack prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace
4. Deploy Node.js App on Kubernetes
bash
Copy
Edit
kubectl apply -f manifests/nodejs-app-deployment.yaml
kubectl apply -f manifests/nodejs-app-service.yaml
5. Create ServiceMonitor
bash
Copy
Edit
kubectl apply -f manifests/service-monitor.yaml
6. Port-Forward Dashboards
Grafana
bash
Copy
Edit
kubectl port-forward svc/kube-prometheus-stack-grafana 3000 -n monitoring
Open: http://localhost:3000
Default credentials: admin / prom-operator or use the secret.

Prometheus
bash
Copy
Edit
kubectl port-forward svc/kube-prometheus-stack-prometheus 9090 -n monitoring
Open: http://localhost:9090

📊 Grafana Dashboards
You can import the dashboard JSON from the dashboards/ folder or use a community dashboard ID (e.g., 1860 for Node Exporter Full).

📸 Screenshots
Screenshot	Description
Prometheus UI showing Node.js app target
Live metrics of app in Grafana
App exposing /metrics

🧹 Cleanup Resources
bash
Copy
Edit
kubectl delete -f manifests/
helm uninstall kube-prometheus-stack -n monitoring
