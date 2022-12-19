ifneq (,$(wildcard ./.env))
include .env
export
endif

create-project: init format validate plan apply

init:
	@terraform -chdir=${EXEC_DIR} init -input=false

format:
	@terraform -chdir=${EXEC_DIR} fmt

validate:
	@terraform -chdir=${EXEC_DIR} validate

plan:
	@terraform -chdir=${EXEC_DIR} plan -input=false

apply:
	@terraform -chdir=${EXEC_DIR} apply -auto-approve

