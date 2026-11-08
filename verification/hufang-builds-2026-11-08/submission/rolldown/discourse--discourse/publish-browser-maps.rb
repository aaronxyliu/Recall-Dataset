require "json"

processor = Rails.application.assets.processor
manifest = processor.manifest_path
before = JSON.parse(File.read(manifest))
processor.process
after = JSON.parse(File.read(manifest))

expected = %w[js/browser-detect.js js/browser-detect.js.map js/browser-update.js js/browser-update.js.map]
changed = (before.keys | after.keys).select { |path| before[path] != after[path] }.sort
abort "Unexpected Propshaft manifest changes: #{changed.take(25).inspect}" unless changed == expected.sort
expected.each { |name| puts "#{name} #{after.fetch(name)}" }
