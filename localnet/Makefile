all: up

build:
	docker build --tag microversenetwork/tendermint docker

prepare: build
	mkdir --parents data
	docker run --rm --interactive --tty \
		--volume $(CURDIR)/data:/tmp/data \
		microversenetwork/tendermint testnet \
			--config /tendermint/default.toml \
			--hostname-prefix node_ \
			--node-dir-prefix node_ \
			--populate-persistent-peers \
			--o /tmp/data \
			--v 4

up: clean prepare
	docker-compose up

clean:
	docker-compose down --remove-orphans
	rm -rf data
