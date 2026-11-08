"""Install the exact verified Compose executable used by this macOS/arm64 run."""
import hashlib
import os
import pathlib
import platform
import urllib.request

assert platform.system() == 'Darwin' and platform.machine() == 'arm64', 'On other platforms install Docker Compose and set RECALL_COMPOSE_BIN.'
target = pathlib.Path(os.environ.get('RECALL_COMPOSE_BIN', '/tmp/recall-hufang-docker-compose'))
expected = '8cd7eb5f95bacb536cc407111662e2c205d67d9abfea5dcb8400be8418db60d1'
url = 'https://github.com/docker/compose/releases/download/v2.40.3/docker-compose-darwin-aarch64'
if not target.exists():
    with urllib.request.urlopen(url, timeout=120) as response:
        data = response.read()
    assert hashlib.sha256(data).hexdigest() == expected
    target.write_bytes(data)
assert hashlib.sha256(target.read_bytes()).hexdigest() == expected
target.chmod(0o755)
print(target)
