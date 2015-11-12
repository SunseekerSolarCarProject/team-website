module Jekyll
	class BrowserifyGenerator < Generator
		def generate (site)
			Dir.chdir '_js'
			Dir.glob('*.js') { |f| doFile f }
			Dir.chdir '..'
		end

		def doFile (name)
			cmd = "browserify #{name} -o ../js/#{name}"

			puts "Browserify-ing #{name}"

			`#{cmd}`
		end
	end
end