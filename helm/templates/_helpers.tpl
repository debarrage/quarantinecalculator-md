{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "project.name" -}}
{{- .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "project.fullname" -}}
{{- $name := .Chart.Name -}}
{{- if contains $name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" $name .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "project.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Common labels
*/}}
{{- define "project.labels" -}}
{{- $version := default .Chart.AppVersion .Values.version -}}
{{- $release := default "unknown" .Values.release -}}
app: {{ include "project.name" . }}
{{ if .Values.environment }}
environment: {{ .Values.environment }}
{{ end -}}
version: {{ $version | quote }}
release: {{ $release | quote }}
app.kubernetes.io/name: {{ include "project.name" . | quote }}
app.kubernetes.io/instance: {{ .Release.Name | quote }}
{{- end -}}

{{- define "project.podlabels" -}}
{{- $version := default .Chart.AppVersion .Values.version -}}
{{- $release := default "unknown" .Values.release -}}
{{- $fullname := include "project.fullname" . -}}
app: {{ $fullname | quote }}
version: {{ $version | quote }} 
{{ if .Values.environment }}
environment: {{ .Values.environment }}
{{ end -}}
release: {{ $release | quote }}
app.kubernetes.io/name: {{ include "project.name" . | quote }}
app.kubernetes.io/version: {{ $version | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service | quote }}
helm.sh/chart: {{ include "project.chart" . }} 
{{- end -}}

{{/*
Common selector
*/}}
{{- define "project.selector" -}}
{{- $version := default .Chart.AppVersion .Values.version -}}
{{- $fullname := include "project.fullname" . -}}
app: {{ $fullname | quote }}
{{- end -}}

{{/*
Define the host for our environments
*/}}
{{- define "project.tls.host" -}}
{{- $name := (.Chart.Name | trunc 63 | trimSuffix "-") -}}
{{- if .Values.ingress.host -}}
{{- .Values.ingress.host -}}
{{- else -}}
{{- printf "%s-%s.%s" (.Values.ingress.subdomain | default $name) .Values.environment (.Values.ingress.domain | default "azure.romcloud.be") -}}
{{- end -}}
{{- end -}}
