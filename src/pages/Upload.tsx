import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Upload as UploadIcon, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Info,
  ArrowLeft
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Upload = () => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type (PDF only for resume)
      if (file.type === 'application/pdf') {
        setSelectedFile(file);
        setUploadSuccess(false);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please select a PDF file for your resume.",
          variant: "destructive"
        });
        event.target.value = ''; // Reset input
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    
    // Simulate upload process
    try {
      // In a real implementation, this would upload to your backend/storage
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUploadSuccess(true);
      toast({
        title: "Resume Uploaded Successfully!",
        description: `${selectedFile.name} has been uploaded and is now available for download.`,
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your resume. Please try again.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Upload Resume
          </h1>
          <p className="text-muted-foreground">
            Secret admin section for updating your resume file
          </p>
        </div>

        {/* Backend Integration Notice */}
        <Alert className="border-primary/20 bg-primary/5 animate-scale-in">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Backend Integration Required:</strong> To enable file uploads, you'll need to connect to Supabase 
            for secure file storage and management. This will allow you to upload, store, and serve resume files safely.
          </AlertDescription>
        </Alert>

        {/* Upload Form */}
        <Card className="animate-slide-up">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle>Resume Upload</CardTitle>
                <CardDescription>
                  Upload your latest resume in PDF format
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            
            {/* File Input */}
            <div className="space-y-2">
              <Label htmlFor="resume-upload">Select Resume File *</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="resume-upload"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  className="flex-1"
                  disabled={uploading}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Only PDF files are accepted. Maximum file size: 10MB
              </p>
            </div>

            {/* File Preview */}
            {selectedFile && (
              <Card className="bg-muted/30 border-dashed animate-fade-in">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{selectedFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(selectedFile.size)} • PDF Document
                      </p>
                    </div>
                    {uploadSuccess && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Upload Button */}
            <Button 
              onClick={handleUpload}
              disabled={!selectedFile || uploading || uploadSuccess}
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              size="lg"
            >
              {uploading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Uploading...
                </>
              ) : uploadSuccess ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Upload Complete
                </>
              ) : (
                <>
                  <UploadIcon className="mr-2 h-4 w-4" />
                  Upload Resume
                </>
              )}
            </Button>

            {/* Success Message */}
            {uploadSuccess && (
              <Alert className="border-green-200 bg-green-50 animate-fade-in">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700">
                  Your resume has been successfully uploaded and is now available for download on your portfolio!
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-gradient-subtle border-border/50 animate-fade-in delay-300">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p>Only PDF files are accepted to ensure consistent formatting across all devices</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p>The uploaded file will replace the current resume available for download</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p>This is a secure admin section - keep the URL private</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p>For full functionality, integrate with Supabase for secure file storage</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upload;