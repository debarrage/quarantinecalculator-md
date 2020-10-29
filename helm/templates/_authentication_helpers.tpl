{{/*
Create a default fully qualified app oauth2 proxy name, based on fullname above.
*/}}
{{- define "project.oauthproxyname" -}}
{{- $fullname := include "project.fullname" . -}}
{{- printf "%s-%s" $fullname "oauth2-proxy" -}}
{{- end -}}

{{/*
Define the base domain for our environments
*/}}
{{- define "project.baseDomain" -}}
{{- printf "%s" (.Values.ingress.host | default "azure.romcloud.be") -}}
{{- end -}}
