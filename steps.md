kubectl get pod

kubectl describe pod

kubectl create deployment --image=registry.rg-10.hm:8082/kube-backend:latest kube-backend

kubectl edit deployment kube-backend

kubectl delete deployment kube-backend

kubectl create secret docker-registry image-pull \
    --docker-server=registry.rg-10.hm:8082 \
    --docker-username=docker \
    --docker-password=docker@rg-10 \
    --docker-email=docker@rg-10.hm

minikube start --insecure-registry=registry.rg-10.hm:8082